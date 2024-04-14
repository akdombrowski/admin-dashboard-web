"use client";

import { FormEvent, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import clientSubmit from "@/actions/survey/clientSubmit";
import Question from "@/ui/survey/Question";

export interface EditableSurveyQuestion {
  [key: number]: string;
}

const templateQuestions: EditableSurveyQuestion = {
  1: "Template Question #1",
  2: "Template Question #2",
  3: "Template Question #3",
};

export default function EditSurveyForm() {
  // num of questions minus first name and last name fields
  let numQuestions = 3;
  const questions = templateQuestions;

  const addQuestion = () => {
    numQuestions++;
    const question = `Question ${numQuestions}`;
    questions[numQuestions] = question
    return <Question questionNum={numQuestions} question={question} />;
  };

  const deleteQuestion = () => {};

  return (
    <Container id="editSurveyFormContainer" maxWidth="md">
      <Grid id="editSurveyGridContainer" container spacing={2}>
        <Grid xs={12} container justifyContent="center" alignItems="center">
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <FitnessCenterIcon fontSize="large" color="success" />
          </Grid>
          <Grid xs flexGrow={5} justifyContent="center" alignItems="center">
            <Typography variant="h1" color="info.light" textAlign="center">
              About You...
            </Typography>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <FitnessCenterIcon fontSize="large" color="success" />
          </Grid>
          <Grid xs={12}>
            <Typography variant="body1" fontWeight={300}>
              Please Answer The Following Questions as Best You Can!
            </Typography>
          </Grid>
        </Grid>

        <Grid
          xs={12}
          container
          component="form"
          noValidate
          action={(formData: FormData) => clientSubmit(formData)}
        >
          <Grid xs={12} sm={6}>
            <TextField
              required
              hiddenLabel
              fullWidth
              disabled
              size="small"
              id="firstName"
              name="firstName"
              defaultValue="First Name"
              autoComplete="given-name"
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              required
              hiddenLabel
              fullWidth
              disabled
              id="lastName"
              name="lastName"
              size="small"
              defaultValue="Last Name"
              autoComplete="family-name"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              hiddenLabel
              fullWidth
              autoFocus
              id="question1"
              name="question1"
              size="small"
              defaultValue="Template Question #1"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              hiddenLabel
              fullWidth
              id="question2"
              name="question2"
              size="small"
              defaultValue="Template Question #2"
            />
          </Grid>
        </Grid>

        <Grid xs={12}>
          <Button
            fullWidth
            id="clientSubmitBtn"
            variant="contained"
            color="success"
          >
            Submit Form
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
