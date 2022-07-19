//         базовый класс
/* import { Router, Response } from 'express';
import { LoggerService } from '../loger/loger.service';
import { IControllerRoute } from './route.interface';

// abstract Означает что нельзя сделать инстонс 
export abstract class BaseController {
  // readonly нельзя менять
  // Создаю инстонс роутера для отдельного контролера
  private readonly _router: Router;

  // В констр. передаю LoggerService что бы передать что класс инициализирован
  constructor(private logger: LoggerService) {
    this._router = Router();
  }
  // метод  конструктора get возврощает router
  get routerGet() {
    return this._router;
  }

  // публичный Метод  sendOk с джинериком Т,  в type создаёт тип ответа и возврощает в статусе код а в json мэссадж
  public sendOk<T>(res: Response, code: number, message: T) {
    res.type('application/json');
    return res.status(code).json(message);
  }

  //  публичный Метод ok  с джинериком Т, вызывает метод sendOk  с джинериком Т,в котором передаёт res, № статуса, мэссадж 
  public ok<T>(res: Response, message: T) {
    return this.sendOk<T>(res, 200, message);
  }

  //  публичный Метод возврощает статус
  public created(res: Response) {
    return res.sendStatus(201);
  }

  // protected Вызов из дочернего эллемента
  protected bindRoures(routes: IControllerRoute[]) {
    // for of получает каждый элем. массива
    for (const rou of routes) {
      // В Логер передаю   ([методы get, post и тд.], а токже путь)
      this.logger.log(`[${rou.methob}] ${rou.path}`);

      // Что-бы контекст из конструктора распространялся на функ.,приминяю к ней метод bind
      //Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение.
      const handler = rou.func.bind(this);

      // В роутер передаю (методы get, post и тд., а токже путь и функцию (req,res,next) )
      //this.router.get('/Loger',(req,res,next))
      //  this.router.get = [rou.methob] ('/Loger'  = rou.path,   (req,res,next) = handler)
      this.routerGet[rou.methob](rou.path, handler);
    }
  }
} */
//-----------------------------------------------------

/*  import { Router, Response } from 'express';
import { injectable } from 'inversify';
import { Ilogger } from '../loger/loger-interface';
//import { LoggerService } from '../loger/loger.service';
import { IControllerRoute } from './route.interface';
import 'reflect-metadata';



////  Так как UserController  дополняет  BaseController то ему тоже необходимо установить декоратор  ////


// @injectable() Это декоратор который декларирует "Сообщает" что class LoggerService  можно положить в контейнер.

 @injectable()
export abstract class BaseController {
  private readonly _router: Router;

  //constructor(private logger: LoggerService) {
  //this._router = Router();
  //}

  constructor(private logger: Ilogger) {
    this._router = Router();
  }

  get routerGet() {
    return this._router;
  }

  public sendOk<T>(res: Response, code: number, message: T) {
    res.type('application/json');
    return res.status(code).json(message);
  }

  public ok<T>(res: Response, message: T) {
    return this.sendOk<T>(res, 200, message);
  }

  public created(res: Response) {
    return res.sendStatus(201);
  }

  protected bindRoures(routes: IControllerRoute[]) {
    for (const rou of routes) {
      this.logger.log(`[${rou.methob}] ${rou.path}`);
      const handler = rou.func.bind(this);
      this.routerGet[rou.methob](rou.path, handler);
    }
  }
} */

//====================================================

/*   import { IControllerRoute } from "./route.interface";
  import { ILogger } from "../loger/loger-interface";
  import { injectable } from "inversify";
  import { Router, Response } from "express";
  import 'reflect-metadata';

  @injectable()
  export abstract class BaseController {
    readonly _basseRout: Router;

    constructor(private basselog: ILogger) {
      this._basseRout = Router();
    }

    get getConroll() {
      return this._basseRout;
    }

    public sendOk<T>(res: Response, code: number, message: T){
    res.type('application/json');
    return res.status(code).json(message)
    };

    public oK<T>(res: Response, message: T){
     return this.sendOk<T>(res,200,message)
    }

    public created(res: Response) {
      return res.sendStatus(201);
    }

    protected bindRoures(controller: IControllerRoute[]) {
      for (const contrRout of controller) {
        this.basselog.log(`[${contrRout.methob}] ${contrRout.path}`);
        const hendler = contrRout.func.bind(this);
        this.getConroll[contrRout.methob](contrRout.path, hendler);
      }
    } 
  } 
*/
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

import { Response, Router } from 'express';
import { ILogger } from '../loger/loger-interface';
import { IControllerRoute } from './route.interface';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { ExpressReturnType } from './route.interface';

@injectable()
export abstract class BaseController {
	readonly _bassRour: Router;
	constructor(private bassLoger: ILogger) {
		this._bassRour = Router();
	}

	get bassGet(): Router {
		return this._bassRour;
	}

	public created(res: Response): ExpressReturnType {
		return res.sendStatus(201);
	}

	public sendOk<T>(res: Response, code: number, message: T): ExpressReturnType {
		res.type('application/json');
		return res.status(code).json(message);
	}

	public oK<T>(res: Response, message: T): ExpressReturnType {
		return this.sendOk<T>(res, 201, message);
	}

	protected bindRoures(rout: IControllerRoute[]): void {
		for (const elem of rout) {
			this.bassLoger.log(`[${elem.methob}] (${elem.path})`);
			const bassFanc = elem.func.bind(this);
			this.bassGet[elem.methob](elem.path, bassFanc);
		}
	}
}
