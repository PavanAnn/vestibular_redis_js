import { MongoClient  } from 'mongodb'
import * as fs from 'fs';

const uri = "mongodb+srv://pavan:123456puc@cluster0.208cbll.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const data = fs.readFileSync('students.json');

const docs = JSON.parse(data.toString());

export const mongoConnect = () => {
        client.connect().then(() => {
            const collection = client.db("Vestibular").collection("Aprovados");

            collection.insertMany(docs, (err, res) => {

            client.close();
        })
    })
}

