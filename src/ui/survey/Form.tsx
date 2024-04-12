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

export default function SurveyForm() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    const data = {};
    // Iterate through the form elements
    Array.from(form.elements).forEach(element => {
      if (element.id && element.value) {  // Check if element has an ID and a value
        data[element.id] = element.value;  // Collect each field's ID and value
      }
    });

    console.log("Form Data:", data);
  };
  return (
    <Container maxWidth={false}>
      <Grid container justifyContent="center" alignItems="stretch">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
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
          sx={{ mt: 3, mb: 2 }}
        >
          <Typography>Save</Typography>
        </Button>
      </Grid>
    </Container>
  );
}
