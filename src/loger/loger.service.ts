/* 
 import { Logger } from 'tslog';
 import { Ilogger } from './loger-interface';
 import { injectable } from 'inversify';
 import 'reflect-metadata';


 // @injectable() Это декоратор который декларирует "Сообщает" что class LoggerService  можно положить в контейнер.
 @injectable()
 export class LoggerService implements Ilogger {
   public logger: Logger;

   constructor() {
     this.logger = new Logger({
       displayInstanceName: false,
       displayLoggerName: false,
       displayFilePath: 'hidden',
       displayFunctionName: false,
     });
   }

   log(...args: unknown[]) {
     this.logger.info(...args);
   }

   error(...args: unknown[]) {
     this.logger.error(...args);
   }

   warn(...args: unknown[]) {
     this.logger.warn(...args);
   }
 } */

//==================================================================

import { ILogger } from './loger-interface';
import { Logger } from 'tslog';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class LoggerService implements ILogger {
	public Ilogg: Logger;
	constructor() {
		this.Ilogg = new Logger({
			displayInstanceName: false,
			displayLoggerName: false,
			displayFilePath: 'hidden',
			displayFunctionName: false,
		});
	}

	log(...args: unknown[]): void {
		this.Ilogg.info(...args);
	}

	error(...args: unknown[]): void {
		this.Ilogg.error(...args);
	}

	warn(...args: unknown[]): void {
		this.Ilogg.warn(...args);
	}
}
