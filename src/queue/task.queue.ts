import {Queue} from "bullmq"
import {redis} from "../config/redis"

export const taskQueue = new Queue("task-jobs",{
  connection:redis
});