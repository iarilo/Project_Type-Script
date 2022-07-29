/*  import express, { Express } from 'express';
import { Server } from 'http';
//import { LoggerService } from './loger/loger.service';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { Ilogger } from './loger/loger-interface';
import { inject, injectable } from 'inversify';
import { TYPES } from './types';
import 'reflect-metadata';


////reflect-metadata указывает наличие типов при эмите   ////


// @injectable() Это декоратор который декларирует "Сообщает" что class   можно положить в контейнер.
@injectable()
export class App {
  app: Express;
  port: number;
  server: Server;

  // useLogger: Ilogger;
  //userContr: UserController;
  //exeptionFilter: ExeptionFilter;

  // @inject Декоратор который принимает индификатор того что надо получить из контецнера "по символу"

  constructor(
 
    @inject(TYPES.Ilogger) private loggerSERVICE: Ilogger,
    @inject(TYPES.UserController)
    private UsController: UserController,
    @inject(TYPES.ExeptionFilter)
    private ExeFilter: ExeptionFilter 

  
  ) //  logger: Ilogger,
    //userControll: UserController,
    //exeptionFilter: ExeptionFilter 
  {
    this.app = express();
    this.port = 8000;
    // this.useLogger = logger;
    //this.userContr = userControll;
    //this.exeptionFilter = exeptionFilter; 
  }
  useRoutes() {
    this.app.use('/user', this.UsController.routerGet);
  }
  useExeptionFilter() {
    this.app.use(this.ExeFilter.catch.bind(this.ExeFilter));
  }
  public async init() {
    this.useRoutes();
    this.useExeptionFilter();
    this.server = this.app.listen(this.port);
    this.loggerSERVICE.log(
      `Сервер запущен на  http://localhost:${this.port} порту`
    );
  }
}  */

//===================================================================//

import express, { Express } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from './types';
import { ILogger } from './loger/loger-interface';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { Server } from 'http';
import 'reflect-metadata';
import { json } from 'body-parser';

@injectable()
export class App {
	app: Express;
	server: Server;
	port: number;
	constructor(
		@inject(TYPES.TYILogger) private servisLog: ILogger,
		//@inject(TYPES.TUserControll) private ussContr: UserController
		@inject(TYPES.TY_UserContr) private appUserContr: UserController,
		@inject(TYPES.TY_Error) private FiltrExeError: ExeptionFilter,
	) {
		this.app = express();
		this.port = 8000;
	}

	/*   appRouts(){
      this.app.use('/users', this.ussContr.getConroll)
    } */

	useMiddlewere(): void {
		this.app.use(json());
	}

	appRouts(): void {
		this.app.use('/user', this.appUserContr.bassGet);
	}

	filterExe(): void {
		this.app.use(this.FiltrExeError.catch.bind(this.FiltrExeError));
	}

	innit(): void {
		this.useMiddlewere();
		this.appRouts();
		this.filterExe();
		this.server = this.app.listen(this.port);
		this.servisLog.log(`Сервер запущен на:${this.port} порту`);
	}
}
