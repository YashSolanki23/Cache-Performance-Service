import redis from "../config/redis"

export async function isRateLimited(ip:string){
  const key=`rate:${ip}`

  const count=await redis.incr(key)

  if(count==1){
    await redis.expire(key,60)
  }

  if(count>10){
    return true;
  }

  return false;
}