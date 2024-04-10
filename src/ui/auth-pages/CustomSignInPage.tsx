"use client";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignInBtn from "@/components/signInBtn";
import Copyright from "@/components/copyright";

import Image from "next/image";

import { useTheme } from "@mui/material/styles";

import type { AuthProvidersType } from "@/actions/getAuthProviders";

const getAuthProviders = async (): Promise<AuthProvidersType> => {
  const res = await fetch(
    new URL("/api/auth/providers", window.location.origin),
  );
  const providers: AuthProvidersType = await res.json();

  return providers;
};

export default function CustomSignInPage({
  img,
}:
{
  img: string;
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
    <Grid
      xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      key={provider.name}
    >
      <SignInBtn provider={provider} />
    </Grid>
  ));

  return (
    <Grid container height="100vh" justifyContent="center" alignItems="center">
      <Grid xs={6} sm={7} md={8} height="100%">
        <Box height="100%" position="relative">
          <Image
            src={img}
            fill
            priority={true}
            alt="inspiring fitness photo"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Grid>
      <Grid
        xs={6}
        sm={5}
        md={4}
        container
        rowSpacing={{ xs: 3, sm: 4 }}
        component={Paper}
        height="100%"
        square
        justifyContent="center"
        alignContent="center"
        alignItems="stretch"
      >
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="stretch"
          py={{ xs: 1, sm: 2, md: 3 }}
        >
          <Typography variant="poster" color={theme.palette.posterColor.main}>
            Guide
          </Typography>
        </Grid>
        <Grid xs={12} container justifyContent="center" alignItems="center">
          <Grid xs display="flex" justifyContent="end" alignItems="center">
            <Avatar
              sx={{ mr: 3, bgcolor: "primary.main", color: "secondary.light" }}
            >
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid
            xs
            flexBasis="max-content"
            flexGrow={0}
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h3" component="h1">
              Sign in
            </Typography>
          </Grid>
          <Grid xs></Grid>
        </Grid>
        <Grid
          xs={12}
          py={8}
          container
          justifyContent="center"
          alignItems="center"
        >
          {providersComponents}
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center" alignItems="end">
          <Copyright />
        </Grid>
      </Grid>
    </Grid>
  );
}
