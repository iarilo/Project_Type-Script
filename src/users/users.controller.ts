/* import { NextFunction, Response, Request } from 'express';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error-class';
import { IUserController } from './users.controller.interface';
//import { LoggerService } from '../loger/loger.service';
import { inject, injectable } from 'inversify';
import { Ilogger } from '../loger/loger-interface';
import { TYPES } from '../types';
import 'reflect-metadata';




////     Что-бы получить в конструкторе нужный файл, надо присвоить декоратор @injectable() классу , а в конструкторе, в декораторе  @inject указать символ, а токже переменную деллаю приватной, что-бы она была доступна в методе присваиваю ей ту же функ. что и в символе   ////

// @injectable() Это декоратор который декларирует "Сообщает" что class LoggerService  можно положить в контейнер.
@injectable()
export class UserController extends BaseController implements IUserController {
  //constructor(loggin: LoggerService) {

  // @inject Декоратор который принимает индификатор того что надо получить из контецнера "по символу"
  constructor(@inject(TYPES.Ilogger) private loggerSERVICE: Ilogger) {
    super(loggerSERVICE);
    this.bindRoures([
      { methob: 'post', path: '/Register', func: this.userRegister },
      { methob: 'post', path: '/Login', func: this.userLogin },
    ]);
  }

     // constructor(
    // @inject(TYPES.Ilogger) private loggerSERVICE: Ilogger
    //  ) {
    // super(loggerSERVICE);
    // this.bindRoures([
     // { methob: 'post', path: '/Register', func: this.userRegister },
     // { methob: 'post', path: '/Login', func: this.userLogin },
    // ]); 

  userLogin(req: Request, res: Response, next: NextFunction) {
    //this.ok(res, 'user-Login');
    next(new HTTPError(401, ' Ошибка авторизации', 'Login'));
  }

  userRegister(req: Request, res: Response, next: NextFunction) {
    this.ok(res, ' user-Register');
  }
} */

//  =================================================================

/* import { BaseController } from "../common/base.controller";
  import { ILogger } from '../loger/loger-interface';
  import { TYPES } from "../types";
  import { injectable, inject } from "inversify";
  import { NextFunction, Request, Response } from 'express';
  import 'reflect-metadata';
 
  

  @injectable()
  export class UserController extends BaseController {
    constructor(@inject(TYPES.TYILogger) private loggerSERVICE: ILogger) {
      super(loggerSERVICE);

      this.bindRoures([
        { methob: 'post', path: '/Loggin', funk: this.userLogin },
        { methob: 'post', path: '/Registr', funk: this.userRegistr },
      ]);
    }

    userLogin(req: Request, res: Response, next: NextFunction) {
      this.oK(res, 'Hellow userLogin');
    }

    userRegistr(req: Request, res: Response, next: NextFunction) {
      this.oK(res, 'Hellow  userRegistr');
    }
  }  */

//------------------------------------------------------------------------

import { BaseController } from '../common/base.controller';
import { TYPES } from '../types';
import { ILogger } from '../loger/loger-interface';
import { IUserController } from './users.controller.interface';
import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { HTTPError } from '../errors/http-error-class';
import { UserLoginDto } from './dto/user-loggin.dto';
import { UserRegistrDto } from './dto/user-registr.dto';
import fs from 'fs';
@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.TYILogger) private userLog: ILogger) {
		super(userLog);

		this.bindRoures([
			{ methob: 'post', path: '/Loggin', func: this.UserLoggin },
			{ methob: 'post', path: '/Registr', func: this.UserRegistr },
		]);
	}

	UserLoggin(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
		//console.log(req.body);
		// this.oK(res, 'Hellow UserLoggin');
		next(new HTTPError(401, 'Ошибка авторизации', 'Loggin-ошибки'));
	}

	UserRegistr(req: Request<{}, {}, UserRegistrDto>, res: Response, next: NextFunction): void {
		//console.log(req.body);
		this.oK(res, ' Hellow  UserRegistr');
	}
}
