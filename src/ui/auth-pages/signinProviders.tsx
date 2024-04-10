"use client";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import SignInBtn from "@/components/signInBtn";

import { useTheme } from "@mui/material/styles";

import type { AuthProvidersType } from "@/actions/getAuthProviders";

const getAuthProviders = async (): Promise<AuthProvidersType> => {
  const res = await fetch(
    new URL("/api/auth/providers", window.location.origin),
  );
  const providers: AuthProvidersType = await res.json();

  return providers;
};

export default function SignInProviders() {
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

  return Object.values(providers).map((provider) => (
    <SignInBtn key={provider.name} provider={provider} />
  ));
}
