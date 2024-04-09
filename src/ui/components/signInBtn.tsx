import React from 'react';
import { signIn } from "next-auth/react";
import { Button } from '@/components/button'
import Typography from "@mui/material/Typography";

export default function SignInBtn({ provider }) {
  return (
    <Button onClick={() => signIn(provider.id)} className="signInButton">
      <Typography variant="button" textAlign="center">
        Sign in with {provider.name}
      </Typography>
    </Button>
  );
}