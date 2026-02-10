import { Request, Response , NextFunction } from 'express';
import { searching } from '../services/app.service';

export const welcome = async (req: Request, res: Response, next: NextFunction) => {
  try{
    res.send("Welcome to Zalo API");
  }
  catch(error){
    next(error)
  }
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const result = await searching(req.body.search_key);
    res.send(result);
  }
  catch(error){
    next(error)
  }
}
