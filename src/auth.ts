import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        try {
          const response = await fetch('https://tiz0drahvk.execute-api.us-east-2.amazonaws.com/default/registerCoach-RegisterCoachFunction-hmyke4bLdhAf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: profile.email, name: profile.name }),
          });

          if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
          }

          const data = await response.json();
          // Attach the custom data to the token for later use in the jwt and session callbacks
          account.coachData = data;
          return true;
        } catch (error) {
          console.error('Error calling API:', error);
          return false;
        }
      }
      return false;
    },
    async jwt({ token, account }) {
      // Check if the account object exists and has the custom data we attached in signIn
      if (account?.coachData) {
        // Attach the custom data to the token object
        token.coachData = account.coachData;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the custom data from the token to the session object
      session.coachData = token.coachData;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});