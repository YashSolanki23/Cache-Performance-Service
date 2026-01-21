import express from "express"
import  cacheroute from "../src/routes/tasks.routes";
import  {rateLimit} from "./middleware/rateLimit"

const app=express()

app.use(express.json())
app.use(rateLimit)
app.use("/tasks",cacheroute)

export default app;
