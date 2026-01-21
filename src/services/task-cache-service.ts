import { taskQueue } from "queue/task.queue";
import {getCache,setCache,deleteCache} from "../services/cache.service"

export async function getTasksForUser(userId:string){
  const cachekey=`tasks:${userId}`

  const cachedTasks=await getCache(cachekey)

  if(cachedTasks)
    return cachedTasks;

  //fake call need to update it after all projects
  const taskfromDB= await fetchTasksFromDb(userId)

  await setCache(cachekey,taskfromDB,120);
  return taskfromDB
}

export async function invalidateUserTasks(userId:string){
  const cacheKey=`tasks:${userId}`;
  await deleteCache(cacheKey);

  //queue job
try{
  await taskQueue.add("task-invaligated",{
    userId,
    at: new Date().toISOString()
  },{
    attempts:3,
    backoff:{
      type:"exponential",
      delay:2000
    }
  });
}catch(error){
  console.error("Failed to enqueue job")  
  }
}

//fake db call update after all projects
export async function fetchTasksFromDatabase(userId:string){
  return  [];
}