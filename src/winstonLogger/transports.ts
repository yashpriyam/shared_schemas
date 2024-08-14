export interface TransportConfig {
  type: string;
  config: {
    service: string;
    syslog: boolean;
    filename?: string;
    dirname?: string;
  };
}

const transports = (config: any): TransportConfig[] => [
  {
    type: "console",
    config: {
      service: `${config.SERVICE_NAME}-${config.SERVICE_VERSION}.${config.BUILD_NUMBER}`,
      syslog: true,
    },
  },
  {
    type: "file-rotate",
    config: {
      service: `${config.SERVICE_NAME}-${config.SERVICE_VERSION}.${config.BUILD_NUMBER}`,
      syslog: true,
      filename: `${config.SERVICE_NAME}.log`,
      dirname: "./log",
    },
  },
  // Uncomment and configure the following block to enable Slack logging
  /*
  {
    type: "slack",
    config: {
      service: config.SERVICE_NAME,
      webhookUrl: "https://hooks.slack.com/services/your/webhook/url",
      username: "MY APP",
    },
  },
  */
];

export default transports;