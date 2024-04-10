"use client";

import Google from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import { signIn } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { type SxProps, type Theme } from "@mui/material";

export default function GitHub({
  iconSx,
  btnSx,
}: {
  iconSx?: SxProps<Theme> | undefined;
  btnSx?: SxProps<Theme> | undefined;
}) {
  return (
    <IconButton
      onClick={() => signIn("google")}
      aria-label="Click to sign in with your Google account"
      sx={{ ...btnSx }}
    >
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Google sx={{ ...iconSx }} />
        <Typography variant="button" textAlign="center">
          Sign in with Google
        </Typography>
      </Stack>
    </IconButton>
  );
}
