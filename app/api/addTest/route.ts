import { client } from "../../../database";

const db = client.db(process.env.MONGO_DATABASE_NAME);
const collection = db.collection('messages');

export async function GET(request: Request) {}
 
// export async function HEAD(request: Request) {}
 
// export async function POST(request: Request) {}
 
// export async function PUT(request: Request) {}
 
// export async function DELETE(request: Request) {}
 
// export async function PATCH(request: Request) {}