/* import {Request, Response, NextFunction,} from 'express';
import { inject, injectable } from 'inversify';
import { Ilogger } from '../loger/loger-interface';
import { TYPES } from '../types';
//import { LoggerService } from '../loger/loger.service';
import { IExeFilter } from './exeption.filter.interface';
import {HTTPError} from './http-error-class';
import 'reflect-metadata';


////     Что-бы получить в конструкторе нужный файл, надо присвоить декоратор @injectable() классу , а в конструкторе, в декораторе  @inject указать символ, а токже переменную деллаю приватной, что-бы она была доступна в методе присваиваю ей ту же функ. что и в символе   ////


// @injectable() Это декоратор который декларирует "Сообщает" что class LoggerService  можно положить в контейнер.
@injectable()
//implements  "реализует" и классе interface
export class ExeptionFilter implements IExeFilter {
  //loggerFiltr: LoggerService;
  //constructor(loggerSER: LoggerService) {
  //this.loggerFiltr = loggerSER;
  // }

  // @inject Декоратор который принимает индификатор того что надо получить из контецнера "по символу"
  constructor(@inject(TYPES.Ilogger) private loggerSER: Ilogger) {}

  catch(
    err: Error | HTTPError,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // Проверка статуса ошибки
    if (err instanceof HTTPError) {
      // с помощью Логера вывожу ошибку в консоли
      this.loggerSER.error(
        `[${err.conText}] Ошибка ${err.statCod}: ${err.message}`
      );
      // ответ пользователю
      res.status(err.statCod).send({ err: err.message });
    } else {
      // с помощью Логера вывожу ошибку в консоли
      this.loggerSER.error(`${err.message}`);
      // ответ пользователю
      res.status(500).send({ err: err.message });
    }
  }
} */

// =======================================================

import { IExeFilter } from './exeption.filter.interface';
import { HTTPError } from './http-error-class';
import { ILogger } from '../loger/loger-interface';
import { Request, Response, NextFunction } from 'express';
import { TYPES } from '../types';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

@injectable()
export class ExeptionFilter implements IExeFilter {
	constructor(@inject(TYPES.TYILogger) private loggerErr: ILogger) {}

	catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {
		if (err instanceof HTTPError) {
			this.loggerErr.error(
				` Контекст:[${err.conText}];   Код ошибки:${err.statCod}; Сообщение:${err.message}`,
			);
			res.status(err.statCod).send({ err: err.message });
		} else {
			this.loggerErr.error(`${err.message}`);
			res.status(500).send({ err: err.message });
		}
	}
}
