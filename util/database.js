// next.js에서 사용하는 mongoDB 사용법

import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://admin:qwer1234@cluster0.g7jczab.mongodb.net/workOutDB?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
