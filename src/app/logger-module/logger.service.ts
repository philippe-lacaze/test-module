import {Injectable} from '@angular/core';

export interface Logger {
  log(message: string, ...params: any[]): void;

  error(message: string, ...params: any[]): void;

  info(message: string, ...params: any[]): void;
}

export class LoggerService {

  private noop: Logger = {
    log: function() {},
    error: function() {},
    info: function() {}
  }

  constructor(private enabled = false, private include: RegExp = null) {
  }

  getLogger(loggerName: string): Logger {
    if (this.enabled && (!this.include || this.include.test(loggerName))) {
      return (function (name: string) {
        const that = this;
        return <Logger>{
          log: function (message: string, ...params): void {
            that._log('log', name, message, params);
          },

          error: function (message: string, ...params): void {
            that._log('error', name, message, params);
          },

          info: function (message: string, ...params): void {
            that._log('info', name, message, params);
          }
        };
      }).call(this, loggerName || 'default');
    } else {
      return this.noop;
    }
  }

  private _log(method: string, name: string, message: string, params) {
    if (console && console[method]) {
      console[method].call(this, name + ' - ' + message, ...params);
    }
  }

}
