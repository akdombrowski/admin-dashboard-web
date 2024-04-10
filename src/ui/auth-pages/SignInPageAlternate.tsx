import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "@/components/copyright";

import Image from "next/image";

import SignInProviders from "@/ui/auth-pages/signinProviders";
import getRNDImg from "@/actions/getRNDImg";

export default async function SignInPageAlternate() {
  const session = await auth();
  const img = await getRNDImg({
    category: "fitness",
    refreshIntervalSeconds: 0,
  });
  const img2 = await getRNDImg({
    category: "fitness",
    refreshIntervalSeconds: 0,
  });

  if (session) {
    redirect("/users");
  }

  return (
    <Container maxWidth={false} sx={{ height: "100vh" }}>
      <Stack
        spacing={6}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1">Guide</Typography>

        <Stack
          spacing={6}
          direction="row"
          height="20%"
          width="100%"
          justifyContent="center"
          alignItems="center"
          py={{ xs: 1, sm: 2, md: 3 }}
        >
          <Box width="25%" height="100%" position="relative">
            <Image
              src={img}
              fill
              priority={true}
              alt="inspiring fitness photo"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stack direction="column" spacing={6}>
            <Box>
              <Typography variant="h5" fontWeight="light">
                Your guide to a healthier life
              </Typography>
              <Box width="25%" height="100%" position="relative"></Box>
            </Box>
            <SignInProviders />
          </Stack>
        </Stack>

        <Copyright />

        <Grid xs={2}></Grid>
      </Stack>
    </Container>
  );
}
