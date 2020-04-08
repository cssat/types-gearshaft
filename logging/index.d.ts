type LogParam = any;

export interface Log {
  info(...args: LogParam[]): void;
  warn(...args: LogParam[]): void;
  error(...args: LogParam[]): void;
  debug(...args: LogParam[]): void;
}

export function createLog(): Log;
