import { assignIn } from "lodash";
import path from "path";

const config = {
    "templateEjs":path.join(__dirname,"..",'views'),
    port:0,
}

if(process.env.NODE_ENV === "development"){
    const localPort = {
        port:3000,
    }
    assignIn(config,localPort)
}

if(process.env.NODE_ENV === "production"){
    const prodPort = {
        port:3100,
    }
    assignIn(config,prodPort)
}

export default config;