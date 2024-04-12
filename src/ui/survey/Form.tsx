"use client";

import { FormEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import clientSubmit from "@/actions/survey/clientSubmit";
import { Stack } from "@mui/material";

export default function SurveyForm() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        width="100%"
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        py={3}
        my={2}
      >
        <Grid
          container
          spacing={2}
          component="form"
          noValidate
          action={clientSubmit}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.light" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </Stack>
        </Grid>
        <Grid
          container
          spacing={2}
          component="form"
          noValidate
          action={clientSubmit}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              autoComplete="given-name"
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              autoComplete="family-name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          id="clientSubmitBtn"
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
        >
          <TextField
            fullWidth
            id="customizableClientSubmitBtnName"
            name="customizableClientSubmitBtnName"
            label="submitBtn"
          />
        </Button>
        <Button
          type="submit"
          id="coachSaveBtn"
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2 }}
        >
          <Typography>Save</Typography>
        </Button>
      </Grid>
    </Container>
  );
}
