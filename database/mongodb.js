import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const uriDb = process.env.URI_DB;

const clientMongo = new MongoClient(uriDb);


const createconnectionMongo = async () => {
    await clientMongo.connect();
    console.log("Conexión a la base de datos establecida");

}

createconnectionMongo();