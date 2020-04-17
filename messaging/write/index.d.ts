import { Log } from '../../logging';
import { MessageStore } from '../../message-store';
import { Message } from '../../.';
import { ClassLike } from '../../.';

type CreateWriterOptions = {
  log?: Log;
  messageStore: MessageStore;
};

interface WriteFn {
  (message: Message, streamName: string, options?: { expectedVersion?: number }): Promise<number>;
}

export interface Writer extends WriteFn {
  emitter: ClassLike;
  initial: (message: Message, streamName: string) => Promise<number>;
}

export function createWriter(options: CreateWriterOptions): Writer;
