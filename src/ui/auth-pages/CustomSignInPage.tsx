"use client";

import { useEffect, useState } from "react";

import SignInBtn from "@/components/signInBtn";

import { useTheme } from "@mui/material/styles";

import type { AuthProvidersType } from "@/actions/getAuthProviders";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card";

const getAuthProviders = async (): Promise<AuthProvidersType> => {
  const res = await fetch(
    new URL("/api/auth/providers", window.location.origin),
  );
  const providers: AuthProvidersType = await res.json();

  return providers;
};

export default function CustomSignInPage({
}: // providers,
  // children,
  {
    // providers: AuthProvidersType;
    // children?: ReactNode;
  }) {
  const theme = useTheme();
  const [providers, setProviders] = useState<AuthProvidersType>({
    google: {
      id: "google",
      name: "Google",
      type: "oidc",
      signinUrl: "http://localhost:3000/api/auth/signin/google",
      callbackUrl: "http://localhost:3000/api/auth/callback/google",
    },
  });

  useEffect(() => {
    const fetchProviders = async () => {
      const provs = await getAuthProviders();
      setProviders(provs);
    };

    fetchProviders();
  }, []);

  const providersComponents = Object.values(providers).map((provider) => (
    <SignInBtn provider={provider} />
  ));

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-center text-center">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Choose a provider to sign in with.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-center justify-center">
          {providersComponents}
        </CardFooter>
      </Card>
    </div>
  );
}