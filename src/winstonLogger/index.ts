import create from "./logger";
import transports from "./transports";

export const createLogger = (serviceConfig: any) => create(transports(serviceConfig));