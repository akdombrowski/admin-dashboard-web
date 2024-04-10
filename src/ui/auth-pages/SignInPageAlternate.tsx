import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "@/components/copyright";

import Image from "next/image";
import SignInWithGoogleBtn from "@/components/signInWithGoogleBtn";

// import SignInProviders from "@/ui/auth-pages/signinProviders";
import getRNDImg from "@/actions/getRNDImg";

export default async function SignInPageAlternate() {
  const session = await auth();
  const img = await getRNDImg({
    category: "fitness",
    refreshIntervalSeconds: 0,
  });

  if (session) {
    redirect("/users");
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <Grid
        container
        spacing={6}
        maxHeight="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={12}>
          <Typography variant="h1" textAlign="center">
            Guide
          </Typography>
        </Grid>

        <Grid
          xs={12}
          container
          height="70%"
          spacing={6}
          justifyContent="start"
          alignItems="stretch"
        >
          <Grid xs={4}>
            <Box width="100%" height="100%" position="relative">
              <Image
                src={img}
                fill
                priority={true}
                alt="inspiring fitness photo"
                style={{ objectFit: "cover", overflow: "hidden" }}
              />
            </Box>
          </Grid>
          <Grid
            xs={7}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={12}></Grid>
            <Grid xs={12} display="flex" justifyContent="center">
              <Typography textAlign="center" fontWeight="light" fontSize="2rem">
                Your guide to a healthier life
              </Typography>
            </Grid>
            <Grid xs={10} display="flex" justifyContent="center">
              <SignInWithGoogleBtn
                btnSx={{
                  my: "auto",
                  // width: "100%",
                  maxWidth: "100%",
                  // height: "100%",
                  height: "100%",
                  p: 1,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderRadius: 1,
                  borderColor: "white",
                }}
                iconSx={{
                  maxWidth: "100%",
                  // maxWidth: "100%",
                  height: "100%",
                  // maxHeight: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={12}>
          <Copyright mt={0} />
        </Grid>
      </Grid>
    </Container>
  );
}
