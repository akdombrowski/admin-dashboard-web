"use client";

import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default async function SignInBtn({ provider }) {
  return (
    <Button variant="contained" onClick={() => signIn(provider.id)}>
      <Typography variant="button" textAlign="center">
        Sign in with {provider.name}
      </Typography>
    </Button>
  );
}
