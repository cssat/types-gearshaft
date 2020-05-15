import { Consumer } from '../consumer';
import { EventEmitter } from 'events';
interface Host extends EventEmitter {
  pause: () => Promise<void>;
  stop: () => Promise<void>;
  unpause: () => void;
}

type RegisterConsumer = (consumer: Consumer) => void;
type RegisterConsumers = { register: RegisterConsumer };
export function startHost(callback: (register: RegisterConsumers) => void): Host;
