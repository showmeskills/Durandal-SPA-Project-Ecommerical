import fs from 'fs';
import path from 'path';


class SafeRequest {
    getAllAds(){
        const data = fs.readFileSync(path.join(__dirname, '..',"mockData",'ads.json')).toString();
        
        return new Promise((resolve) => {
            resolve(JSON.parse(data));
        })
    }
    getAllProducts(){
        const data = fs.readFileSync(path.join(__dirname, '..',"mockData",'products.json')).toString();
        return new Promise((resolve) => {
            resolve(JSON.parse(data));
        })
    }
}

export default SafeRequest