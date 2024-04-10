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

import getRNDImg from "@/actions/getRNDImg";

export default async function HomePage() {
  const session = await auth();
  const img = await getRNDImg({
    category: "fitness",
    refreshIntervalSeconds: 0,
  });

  if (session) {
    try {
      const response = await fetch('https://tiz0drahvk.execute-api.us-east-2.amazonaws.com/default/registerCoach-RegisterCoachFunction-hmyke4bLdhAf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: session.user.email, name: session.user.name }),
      });

      const data = await response.json();
      const redirectPath = data.message === 'Coach added successfully' || (data.coach && data.coach.questions_finished === false) ? '/questions' : '/users';
      redirect(redirectPath);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
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
            <Button
              variant="contained"
              component={Link}
              href="/api/auth/signin"
            >
              <Typography
                variant="h5"
                className="py-1 px-6 border-1 border-white border-solid"
              >
                Login
              </Typography>
            </Button>
          </Grid>
          <Grid xs={12} display="flex" justifyContent="center" alignItems="end">
            <Copyright />
          </Grid>
        </Grid>

        <Grid
          xs={2}
        ></Grid>
      </Grid>
    </Container>
  );
}
