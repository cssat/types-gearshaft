type Register = <T>(messageType: { new (...args: any[]): T }, handler: (entity: any, input: T) => void) => void;

interface EntityProjection {
  project: any;
  registerHandlers: any;
}
declare function createEntityProjection(callback: (register: Register) => void): EntityProjection;

export { EntityProjection, createEntityProjection };
