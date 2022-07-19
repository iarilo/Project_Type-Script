/*  import { Request,Response,NextFunction } from "express";

  export interface IUserController {
    userLogin: (req: Request, res: Response, next: NextFunction) => void;
    userRegister: (req: Request, res: Response, next: NextFunction) => void;
  } */

//   ================================================

import { Request, Response, NextFunction } from 'express';

export interface IUserController {
	UserLoggin: (req: Request, res: Response, next: NextFunction) => void;
	UserRegistr: (req: Request, res: Response, next: NextFunction) => void;
}
