import {redis} from "../config/redis"

export async function getCache(key:string){
try{
    const value= await redis.get(key);

    if(!value)
     return null;

  return JSON.parse(value);
}catch(error){
  return null;
}
    
}

export async function setCache(
  key:string,
  data:any,
  ttl:number
){
 try{
   await redis.set(key,JSON.stringify(data),"EX",ttl);

 }catch(error){
   return;
 }
  
}

export async function deleteCache(key:string){
try{
  await redis.del(key);
}
  catch(error){
    return;
  }
}