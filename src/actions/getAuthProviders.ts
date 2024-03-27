"use server";

/**
 * next-auth doesn't export this type for some reason
 */
export interface AuthProviderType {
  // 'google' auth provider shown as example in comments

  id: string; // 'google'
  name: string; //'Google',
  type: string; //'oidc',
  signinUrl: string; //'http://localhost:3000/api/auth/signin/google',
  callbackUrl: string; //'http://localhost:3000/api/auth/callback/google'

}

export interface AuthProvidersType {
  [key: string]: AuthProviderType;
}

/**
 * Uses this app's own /auth api to get the auth providers. Can't use
 * next-auth/react because it's an async function but tagged with use client
 * (which nextjs doesn't handle very well). Alternatively could separate the
 * providers from auth.ts config into its own variable to use there and to
 * export for use outside.
 *
 * ${process.env.ORIGIN} is the ORIGIN env variable which should point to the
 * origin of whereve the app is being hosted, i.e., http://localhost:3000 or
 * https://example.com There wasn't an easy way of programmatically detecting
 * this inside of an async component
 *
 * TODO: On production var's need to have NEXT_PUBLIC_ prefix to be exposed
 *       client-side. Add condition to check whether production env and to use
 *       the public env var automatically. Vercel might supply a default base
 *       url env var, too.
 *
 * @returns Objext containing auth providers
 */
const getAuthProviders = async (
  origin: string | URL = process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.ORIGIN,
): Promise<AuthProvidersType> => {
  const res = await fetch(new URL("/api/auth/providers", origin));
  const providers = await res.json();

  return providers;
};

export default getAuthProviders;
