import { randomUUID } from "node:crypto";
import fs from "node:fs";

const PATH = "./log/historyUser.json"

const readHistory = () => {
    const jsonData = fs.readFileSync(PATH)
    const history = (JSON.parse(jsonData.toString()));
    return history;

};

const writeHistory = (state,id) => {

    const data = readHistory()
    const register ={
        id,
        date:  new Date().toLocaleString()
    }

    if (state === "connected") {
        data.userConnection.push(register)
    } else {
        data.userDisconnection.push(register)
    }

    const jsonData = JSON.stringify(data)
        
    fs.writeFileSync(PATH, jsonData)

};


export {readHistory , writeHistory}