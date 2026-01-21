import {Router} from "express";

import {
  getTasksForUser,
  invalidateUserTasks
} from "../services/task-cache-service"

const cacheroute=Router()

cacheroute.get("/:userId",async (req,res)=>{
  const tasks=await getTasksForUser(req.params.userId);

  res.json(tasks);
})

cacheroute.post("/:userId",async (req,res)=>{
  const invalidate=await invalidateUserTasks(req.params.userId)

  res.json({
    success:"true"
  })
});

export default cacheroute;