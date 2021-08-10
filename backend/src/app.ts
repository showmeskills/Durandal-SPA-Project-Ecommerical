import express from "express";
import router from "./route/router";
const app = express();

app.use("/api",router);

app.listen(8000,()=>console.log(8000));