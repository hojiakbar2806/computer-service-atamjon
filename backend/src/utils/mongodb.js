import { MongoClient } from "mongodb"

const uri = "mongodb+srv://atamjon:P1moXTkaucjjTVmu@cluster0.0buhyk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri)

const db = client.db("service")

async function connect(){
    await client.connect()
    console.log("Mongo db ga ulandi")
}

export {db, connect}