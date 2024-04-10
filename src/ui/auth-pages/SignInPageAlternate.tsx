import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "@/components/copyright";

import Image from "next/image";

import SignInProviders from "@/ui/auth-pages/signinProviders";
import getRNDImg from "@/actions/getRNDImg";

export default async function SignInPageAlternate() {
  const session = await auth();
  const img = await getRNDImg();

  if (session) {
    redirect("/users");
  }

  return (
    <Container maxWidth={false} sx={{ height: "100vh" }}>
      <Grid
        height="100%"
        container
        justifyContent="center"
        alignItems="stretch"
        py={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          xs={2}
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="50%" height="50%" position="relative">
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
          xs={4}
          container
          height="100%"
          justifyContent="center"
          // alignContent="center"
          alignItems="stretch"
        >
          <Grid
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="stretch"
            py={{ xs: 1, sm: 2, md: 3 }}
          >
            <Typography variant="h1">Guide</Typography>
          </Grid>
          <Grid
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="stretch"
          >
            <Typography variant="h5" fontWeight="light">
              Your guide to a healthier life
            </Typography>
          </Grid>
          <Grid
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SignInProviders />
          </Grid>
          <Grid xs={12} display="flex" justifyContent="center" alignItems="end">
            <Copyright />
          </Grid>
        </Grid>

        <Grid xs={2}></Grid>

        <Grid xs={12} display="flex" justifyContent="center" alignItems="end">
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
}
