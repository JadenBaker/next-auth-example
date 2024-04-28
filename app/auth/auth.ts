import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../lib/db";
// import facebook from "next-auth/providers/facebook";
// import apple from "next-auth/providers/apple";
 
export const { handlers, auth, signIn, signOut } = NextAuth({ 
    adapter: MongoDBAdapter(clientPromise), 
    providers: [Google],
})