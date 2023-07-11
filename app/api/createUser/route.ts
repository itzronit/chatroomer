import { connectDB, disconnectDB } from "../../../database";
import User from "../../../schemas/user";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req: Request) {
  //@ts-ignore
  const { email, username, fullName, password } = await req.json();
  //@ts-check
  const missingFields = [];

  if (!email) missingFields.push('email');
  if (!username) missingFields.push('username');
  if (!fullName) missingFields.push('fullName');
  if (!password) missingFields.push('password');

  if (missingFields.length > 0) {
    disconnectDB();
    return NextResponse.json({ message: `Missing fields: ${missingFields.join(', ')}`, body: req.json() }, { status: 400 })
  }

  const user = new User({
    email,
    username,
    fullName,
    password
  });

  await user.save();

  disconnectDB();

  return NextResponse.json({ message: 'User created successfully' });

}