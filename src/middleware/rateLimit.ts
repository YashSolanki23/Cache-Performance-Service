import {Request,Response,NextFunction} from "express"
import isRateLimited from "../services/rate-limit-service"

export async function rateLimit(
  req:Request,
  res:Response,
  next:NextFunction
){
  const limited=await isRateLimited(req.ip)

  if(limited){
    return res.status(429).json({
      message:"Too Many Requests"
    });
  }

  next()
}