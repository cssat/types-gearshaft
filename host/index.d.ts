import { Consumer } from '../consumer';
import { EventEmitter } from 'events';
interface Host extends EventEmitter {
  pause: () => Promise<void>;
  stop: () => Promise<void>;
  unpause: () => void;
}

type RegisterFn = (consumer: Consumer) => void; // TODO: will be a consumer type
type Register = { register: RegisterFn };
export function startHost(callback: (register: Register) => void): Host;
