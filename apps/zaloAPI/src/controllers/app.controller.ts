import { Request, Response , NextFunction } from 'express';
import { searching } from '../services/app.service';

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const result = await searching(req.body.search_key);
    res.send(result);
  }
  catch(error){
    next(error)
  }
}
