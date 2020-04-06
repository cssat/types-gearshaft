type Register = <T>(
  messageType: { new (...args: any[]): T },
  handler: (entity: any, input: T) => void
) => void;

export interface EntityProjection {
  project: any;
  registerHandlers: any;
}
export function createEntityProjection(
  callback: (register: Register) => void
): EntityProjection;
