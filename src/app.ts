import express,{ Express } from 'express';
import { userRouter } from './users/user';
import { Server } from 'http'
import { LoggerService } from './loger/loger.service';

export class App {
  app: Express;
  port: number;
  server: Server;
  useLogger: LoggerService;

  constructor(logger: LoggerService) {
    this.app = express();
    this.port = 8000;
    this.useLogger = logger;
 
  }

  useRoutes() {
    this.app.use('/user', userRouter);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.useLogger.log(`Сервер запущен на  http://localhost:${this.port} порту`);
  
  }
}







































 





