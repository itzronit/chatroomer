import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/schemas/User";
import { connectDB } from "@/database";

export const options: NextAuthOptions = {
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "putyourusernamelikethis"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "dontuse123"
                }
            },
            async authorize(credentials) {
                //start

                connectDB();

                const user = await User.findOne({
                    username: credentials?.username
                })

                if (user === null) {
                    return null;
                }

                const { password } = user;

                if (password === credentials?.password) {
                    return JSON.stringify(user);
                } else {
                    return null
                }
                //end
            },
        })
    ]
}