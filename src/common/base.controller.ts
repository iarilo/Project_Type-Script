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

 import { Router, Response } from 'express';
import { LoggerService } from '../loger/loger.service';
import { IControllerRoute } from './route.interface';

export abstract class BaseController {
  private readonly _router: Router;

  constructor(private logger: LoggerService) {
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
}

 



 


































