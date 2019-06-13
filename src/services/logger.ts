type LogMethod = (message: string) => void;

interface Message {
  level: number;
  message: string;
}

interface ILogger {
  error: LogMethod;
  warn: LogMethod;
  info: LogMethod;
  debug: LogMethod;
}

export class Logger implements ILogger {

  static get ERROR() { return 3; }
  static get WARN() { return 4; }
  static get INFO() { return 6; }
  static get DEBUG() { return 7; }

  level: number = Logger.ERROR;
  batchSize: number = 10;
  messages: Array<Message> = [];

  send(messages: Array<Message>) {
    // Post client-side messages to API via apiClient-service
    console.log('Posting messages to API...', messages);
  }

  setLevel(value: number) {
    this.level = value;
  }

  setBatchSize(value: number) {
    this.batchSize = value;
  }

  error: LogMethod = message => this._log(Logger.ERROR, message);
  warn: LogMethod = message => this._log(Logger.WARN, message);
  info: LogMethod = message => this._log(Logger.INFO, message);
  debug: LogMethod = message => this._log(Logger.DEBUG, message);

  private _log(level: number, message: string) {
    if (level <= this.level) {
      const messageObj = {
        level,
        message,
      };

      this.messages.push(messageObj);

      // Show temporarily log-message
      console.log(messageObj);

      if (this.messages.length >= this.batchSize) {
        this.send(this.messages.splice(0, this.batchSize));
      }
    }
  }
}
