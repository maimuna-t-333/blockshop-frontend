import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectToDB } from "@/lib/db"; // your MongoDB connection
import User from "@/models/User"; // your User model

export const POST = async (req, res) => {
  return NextAuth({
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          await connectToDB(); // connect to MongoDB
          const user = await User.findOne({ email: credentials.email });
          if (!user) throw new Error("No user found");
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) throw new Error("Invalid password");
          return { id: user._id, email: user.email, name: user.name };
        },
      }),
    ],
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
  })(req, res);
};

