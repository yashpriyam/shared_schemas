import createFactory, { TransportConfig } from "./factory";

const create = (transports: TransportConfig[]): any => {
  return createFactory(transports);
};

export default create;
