
import {Request, Response, NextFunction,} from 'express';
import { LoggerService } from '../loger/loger.service';
import { IExeFilter } from './exeption.filter.interface';
import {HTTPError} from './http-error-class';

//implements  "реализует" и классе interface 
  export class ExeptionFilter implements IExeFilter {
    loggerFiltr: LoggerService;

    constructor(loggerSER: LoggerService) {
      this.loggerFiltr = loggerSER;
    }

    catch(
    err:Error | HTTPError,req:Request,res:Response,next:NextFunction) {
   // Проверка статуса ошибки
   if (err instanceof HTTPError) {
     // с помощью Логера вывожу ошибку в консоли
     this.loggerFiltr.error(
       `[${err.conText}] Ошибка ${err.statCod}: ${err.message}`);
     // ответ пользователю
     res.status(err.statCod).send({ err: err.message });
   } else{
     // с помощью Логера вывожу ошибку в консоли
     this.loggerFiltr.error(`${err.message}`);
     // ответ пользователю
     res.status(500).send({ err: err.message });
    }
   }
  }











































