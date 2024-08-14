import * as winston from "winston";
import WinstonSlackTransport from "winston-slack-webhook-transport";
import WinstonRotate from "winston-daily-rotate-file";
const { combine, timestamp, label, printf, json } = winston.format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `[${label} ${timestamp} ${level}] ${message}`;
});

export interface TransportConfig {
  type: string;
  config: {
    format?: string;
    service: string;
    filename?: string;
    dirname?: string;
  };
}

function createConsoleTransport(config: any, options: any) {
  return new winston.transports.Console(options);
}

function createFileRotateTransport(config: any, options: any) {
  if (config.filename) options.filename = config.filename;
  if (config.dirname) options.dirname = config.dirname;

  return new WinstonRotate(options);
}

function createSlackTransport(config: any, options: any) {
  return new WinstonSlackTransport(config);
}

function getLoggerTransports(transports: TransportConfig[]) {
  return transports.map((transport) => {
    const { type, config } = transport;

    let options: any = {};

    options.levels = winston.config.syslog.levels;

    let format = null;
    if (config.format === "json") {
      format = json();
      options.format = combine(
        label({ label: config.service }),
        timestamp({
          format: "MMM-DD-YYYY HH:mm:ss",
        }),
        format
      );
    } else {
      options.format = combine(
        winston.format.colorize(),
        label({ label: config.service }),
        timestamp({
          format: "MMM-DD-YYYY HH:mm:ss",
        }),
        customFormat
      );
    }

    switch (type) {
      case "console":
        return createConsoleTransport(config, options);
      case "file-rotate":
        return createFileRotateTransport(config, options);
      case "slack":
        return createSlackTransport(config, options);
      default:
        throw new Error(`Unknown transport type: ${type}`);
    }
  });
}

export default function createFactory(transports: TransportConfig[]) {
  return winston.createLogger({
    transports: getLoggerTransports(transports),
  });
}

