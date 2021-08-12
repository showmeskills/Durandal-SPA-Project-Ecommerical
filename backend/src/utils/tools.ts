import bcrypt from "bcrypt";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";

export const hash = (myPlaintextPassword:string)=>{
    return new Promise<string>((resolve, reject)=>{
        bcrypt.hash(myPlaintextPassword,10,(err, hash)=>{
            if(err) {reject(err);}
            resolve(hash);
        })
    })
}

export const compare = (myPlaintextPassword:string,hash:string)=>{
    return new Promise<boolean>((resolve, reject)=>{
        bcrypt.compare(myPlaintextPassword,hash,(err,compare)=>{
            if(err) {reject(err);}
            resolve(compare);
        })
    })
}

export const token = (username?:string)=>{
    const privateKey = fs.readFileSync(path.join(__dirname,"..","config","rsa_private_key.pem"))
    const token = jwt.sign({username},privateKey,{algorithm:"RS256"})
    return token;
}

export const tokenDecode = (token:string)=>{
    const publicKey = fs.readFileSync(path.join(__dirname, "..","config","rsa_public_key.pem"))
    const result = jwt.verify(token,publicKey);
    return result;
}