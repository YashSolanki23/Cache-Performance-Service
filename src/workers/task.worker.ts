import {Worker} from "bullmq"
import {redis} from "../config/redis"

new Worker(
  "task-jobs",
  async job =>{
    console.log("Processing job:",job.name);

    await redis.set(
      `audit:${job.data.userId}`,
      job.data.at
    )
    console.log("Audit log stored");
  },{
    connection:redis
  }
);
