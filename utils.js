
import * as fs from 'fs';

const data = fs.readFileSync('students.json');

const docs = JSON.parse(data.toString());

console.log(docs.length)