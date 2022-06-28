import express,{ Express } from 'express';
import { userRouter } from './users';
import { Server } from 'http'

export class App {

  app: Express;
  port: number;
  server: Server;

 constructor() {
  this.app = express();
  this.port = 8000;
}

 useRoutes() {
  this.app.use('/user', userRouter);
}

 public  async init(){
  this.useRoutes();
  this.server = this.app.listen(this.port)
  console.log(`Сервер запущен на  http://localhost:${this.port} порту`);
 }

}

 




