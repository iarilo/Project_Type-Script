
 import express,{Request,Response,NextFunction} from 'express';
 import { userRouter } from './users.js';

  const app = express();
  const port = 8000;

  

  app.use((req,res,next) => {
  console.log('Время', Date.now());
  next();
  })
 
  app.get('/hello', (req, res) => {
  res.send('Hellow GET')
  })

  app.use('/user', userRouter);

  app.use((err: Error,req: Request,res: Response,next: NextFunction) => {
  console.log( err.message);
  res.status(401).send(err.message)
  });
  

  app.listen(port, () => {
    console.log(` Сервер запущен на  ${port}  порту`)
  })














