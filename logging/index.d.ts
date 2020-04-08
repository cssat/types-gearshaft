type LogParam = any;

interface Log {
  info(...args: LogParam[]): void;
  warn(...args: LogParam[]): void;
  error(...args: LogParam[]): void;
  debug(...args: LogParam[]): void;
}

declare function createLog(): Log;

export { Log, createLog };
