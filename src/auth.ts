import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        try {
          const response = await fetch(
            "https://tiz0drahvk.execute-api.us-east-2.amazonaws.com/default/registerCoach-RegisterCoachFunction-hmyke4bLdhAf",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: profile.email,
                name: profile.name,
              }),
            },
          );

          if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
          }

          const data = await response.json();

          return true;
        } catch (error) {
          console.error("Error calling API:", error);
          return false;
        }
      }
      return false;
    },
    async jwt({ token, user, account }) {
      // Check if the signIn callback returned any data
      if (account?.provider === "google" && user) {
        token.coachData = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.coachData) {
        session.coachData = token.coachData;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
