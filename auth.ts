import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Nodemailer from "next-auth/providers/nodemailer"


export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Nodemailer({

    })],
})