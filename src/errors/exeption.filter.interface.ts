import { Request, Response, NextFunction } from 'express';

   export interface IExeFilter {
     catch: (err: Error, req: Request, res: Response, next: NextFunction) => void
   }





























