"use client";

import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SignInBtn({ provider, ...btnSx }) {
  return (
    /**
     * if you use '...btnSx', then when creating a SignInBtn component you can
     * do
     *
     * <SignInBtn provider={provider} btnSx={{ height: 100, width: "auto",
     * ...whatever sx props you want this Button to have}}
     *
     * You can add '...textSx' as another param and then use the same technique
     * in the Typography component
     */
    <Button
      variant="contained"
      onClick={() => signIn(provider.id)}
      sx={{ ...btnSx }}
    >
      <Typography variant="button" textAlign="center">
        Sign in with {provider.name}
      </Typography>
    </Button>
  );
}
