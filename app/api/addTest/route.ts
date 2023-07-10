import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
client.connect().then(() => {
  console.log("Connected to MongoDB");
})

const dbName = "chatroomer-dev";
const db = client.db(dbName);
const collection = db.collection('messages');


export async function GET(request: Request) {}
 
// export async function HEAD(request: Request) {}
 
// export async function POST(request: Request) {}
 
// export async function PUT(request: Request) {}
 
// export async function DELETE(request: Request) {}
 
// export async function PATCH(request: Request) {}