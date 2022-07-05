import { NextFunction, Response, Request } from 'express';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error-class';
import { LoggerService } from '../loger/loger.service';

export class UserController extends BaseController {
  constructor(loggin: LoggerService) {
    super(loggin);
    this.bindRoures([
      { methob: 'post', path: '/Register', func: this.userRegister },
      { methob: 'post', path: '/Login', func: this.userLogin },
    ]);
  }

  userLogin(req: Request, res: Response, next: NextFunction) {
    //this.ok(res, 'user-Login');
     next(new HTTPError(401, ' Ошибка авторизации', 'Login'));
  }

  userRegister(req: Request, res: Response, next: NextFunction) {
    this.ok(res, ' user-Register');
   
  }
}


