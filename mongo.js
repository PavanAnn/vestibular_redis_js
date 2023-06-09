import { MongoClient  } from 'mongodb'
import { createClient } from "redis";
import * as fs from 'fs';

const uri = "mongodb+srv://pavan:123456puc@cluster0.208cbll.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const data = fs.readFileSync('students.json');

const docs = JSON.parse(data.toString());

const col = client.db("Vestibular").collection("Aprovados");

col.drop();

export const mongoConnect = () => {
        client.connect().then(() => {
            const collection = client.db("Vestibular").collection("Aprovados");

            collection.insertMany(docs, (err, res) => {

            client.close();
        })
    })
}

const redisClient = createClient({
    socket: {
        host: 'localhost',
        port: '6379'
    },
});

export const getAprovados = () => {
    const aprovados = col.find()
    let key;
    for(let row of aprovados) {
        key = row._id;
        redisClient.set(key, json.stringify(row));
    }

    const colUpdate = col.watch(full_document="updateLookup")

    for(let update of colUpdate) {
        let colType = update["operationType"]

        if(colType.includes(["insert", "update"])) {
            let fullDocument = update["fullDocument"] 
            let colJson = json.dumps(fullDocument)

            let key = fullDocument["_id"]
            redisClient.set(key, colJson)
        }
    }

}

