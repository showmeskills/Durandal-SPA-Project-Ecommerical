import express from "express";
import cors from "cors";
import productsRoute from "./route/productsRoute";
import adsRouter from "./route/adsRoute";
import log4js from "log4js";
import config from "./config/_";
const app = express();

let port:number;
if(process.env.NODE_ENV === "production"){
    port = config.port;
}
if(process.env.NODE_ENV === "development"){
    port = config.port
}

log4js.configure({
    appenders: { cheese: { type: "file", filename: "./logs/cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
})
const logger = log4js.getLogger("cheese");
logger.level = "debug";

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.set('views',config.templateEjs)
app.set('view engine', 'ejs');

app.use("/api",productsRoute);
app.use('/api',adsRouter);

app.listen(port,()=>console.log(port));