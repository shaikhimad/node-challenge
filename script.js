import express from "express";
import router from "./routes"
import bodyParser from "body-parser";

const app = express(); 

const port = 3011;

app.listen(3011, (req, res) => {
  console.log(`Server is running on port ${port}, have a nice day!`)
})

app.use(bodyParser.json())

app.use("/api.characters", router)
