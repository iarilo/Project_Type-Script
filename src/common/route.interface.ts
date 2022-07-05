
/*  import { Router,Request ,Response,NextFunction} from "express";

 // интерфейс для функ. bindRoures
 export interface IControllerRoute {
   path: string;
   func: (req: Request, res: Response, next: NextFunction) => void;
   //  methob: с помощью keyof  получает ключи 'get' | 'post' | 'delete' | 'patch' | 'put'> из Router, из нового интерфейса созданного с помощью Pick
   methob: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
 } */
 //------------------------------------------------



    import { Router, Request, Response, NextFunction } from 'express';

   export interface IControllerRoute {
     path: string;
     func: (req: Request, res: Response, next: NextFunction) => void;
     methob: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
   } 

















