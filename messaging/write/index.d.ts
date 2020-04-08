import { Log } from '../../logging';
import { MessageStore } from '../../message-store';
import { Message } from '../../.';

type CreateWriterOptions = {
  log?: Log;
  messageStore: MessageStore;
};

type WriteFn = <T>(message: Message<T>, streaName: string) => number;

export function createWriter(options: CreateWriterOptions): WriteFn;
