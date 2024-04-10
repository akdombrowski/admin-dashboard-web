import React from 'react';
import { signIn } from "next-auth/react";
import { Button } from '@/components/button'
import { Google } from '@mui/icons-material';
// TODO: make the icons dynamic based on the providers.
export default function SignInBtn({ provider }) {
  return (
    <Button onClick={() => signIn(provider.id)} className="signInButton">
      <Google className="mr-2 h-4 w-4" />Sign in with {provider.name}
    </Button>
  );
}