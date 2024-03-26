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
    // Nodemailer({}),
  ],
  callbacks: {
    /**
     * Authjs docs on signIn callback:
     * https://authjs.dev/guides/basics/callbacks#sign-in-callback
     */
    signIn: async ({ account, profile }): Promise<string | boolean> => {
      // Check if Google has verified the user's email, so that we can trust the
      // email belongs to the current authenticated user.
      // This is a special property that Google returns
      // https://authjs.dev/reference/core/providers/google
      if (account.provider === "google") {
        return profile.email_verified;
      }

      console.error(
        "signin",
        "\n",
        "provider:",
        account.provider,
        " email_verified:",
        profile.email_verified
      );
      // false makes sure the email has been verified and the user has
      // used Google to authn
      return false;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
