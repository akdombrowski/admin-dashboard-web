"use client";

import IconButton from "@mui/material/IconButton";
import { signOut } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { type SxProps, type Theme } from "@mui/material";

export default function SignOutBtn({
  iconSx,
  btnSx,
  txtSx,
}: {
  iconSx?: SxProps<Theme> | undefined;
  btnSx?: SxProps<Theme> | undefined;
  txtSx?: SxProps<Theme> | undefined;
}) {
  return (
    <IconButton
      onClick={() => signOut()}
      aria-label="Click to sign out"
      sx={{ ...btnSx }}
    >
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <ExitToAppIcon sx={{ ...iconSx }} />
        <Typography variant="button" sx={{ ...txtSx }}>
          Sign Out
        </Typography>
      </Stack>
    </IconButton>
  );
}
