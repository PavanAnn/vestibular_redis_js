import { MongoClient, ServerApiVersion  } from 'mongodb'
import * as fs from 'fs';

const uri = "mongodb+srv://pavan:123456puc@cluster0.208cbll.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const data = fs.readFileSync('students.json');

const docs = JSON.parse(data.toString());

export const mongoConnect = () => {
    client.connect(err => {
        const collection = client.db("test").collection("devices");

        collection.insertMany(docs, (err, res) => {

        client.close();
    }); 
  
});

/* client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  }); */
}

mongoConnect()
