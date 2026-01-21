import app from "../src/app"

const port = process.env.PORT || 5001

app.listen(port,()=>{
  console.log(`Server is running at port ${port}`)
})