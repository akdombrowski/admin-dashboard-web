"use client";

import { ReactNode } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "@/components/copyright";

import Image from "next/image";

import { useTheme } from "@mui/material/styles";

export default function CustomSignInPage({
  img,
  children,
}: {
  img: string;
  children: ReactNode;
}) {
  const theme = useTheme();

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
        alignContent="start"
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
          <Grid
            xs
            display="flex"
            justifyContent="end"
            alignItems="center"
          >
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
          {/* Slot for children prop */}
          {children}
          {/* Slot for children prop */}
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center" alignItems="end">
          <Copyright />
        </Grid>
      </Grid>
    </Grid>
  );
}
