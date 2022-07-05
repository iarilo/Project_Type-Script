 import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './loger/loger.service';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';

export class App {
  app: Express;
  port: number;
  server: Server;
  useLogger: LoggerService;
  userContr: UserController;
  exeptionFilter: ExeptionFilter;

  constructor(
    logger: LoggerService,
    userControll: UserController,
    exeptionFilter: ExeptionFilter
  ) {
    this.app = express();
    this.port = 8000;
    this.useLogger = logger;
    this.userContr = userControll;
    this.exeptionFilter = exeptionFilter;
  }
  useRoutes() {
    this.app.use('/user', this.userContr.routerGet);
  }
    useExeptionFilter() {
    this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
  }
  public async init() {
    this.useRoutes();
     this.useExeptionFilter();
    this.server = this.app.listen(this.port);
    this.useLogger.log(
      `Сервер запущен на  http://localhost:${this.port} порту`
    );
  }
} 


