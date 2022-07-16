const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "db-heartlink";
// Use connect method to connect to the server
client.connect();
const db = client.db(dbName);


module.exports=db