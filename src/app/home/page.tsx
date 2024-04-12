"use client";

import { FormEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import clientSubmit from "@/actions/survey/clientSubmit";
import { CardActions, CardContent } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth={false}>
      <Typography component="h1" variant="h5">
        Welcome to your Guide Home Page!
      </Typography>
      <Grid container spacing={2} justifyContent="space-around">
        <Grid item xs={4} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="body1">Edit Questions Form</Typography>
            </CardContent>
            <CardActions>
              <Link href="/survey" />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="body1">Client Data</Typography>
            </CardContent>
            <CardActions>
              <Link href="/users" />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth>
            <Typography variant="subtitle1">
              Copy Your Shareable Link
            </Typography>
          </Button>
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
    </Container>
  );
}
