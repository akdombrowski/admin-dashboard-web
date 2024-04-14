"use client";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import clientSubmit from "@/actions/survey/clientSubmit";

export interface EditableSurveyQuestion {
  [key: number]: string;
}

const templateQuestions: EditableSurveyQuestion = {
  1: "Template Question #1",
  2: "Template Question #2",
  3: "Template Question #3",
};

export default function ViewSurveyResponses() {
  // num of questions minus first name and last name fields
  let numQuestions = 3;
  const questions = templateQuestions;

  const addQuestion = () => {
    numQuestions++;
    const question = `Question ${numQuestions}`;
    questions[numQuestions] = question;
    return (
      <Grid xs={12}>
        <TextField
          hiddenLabel
          fullWidth
          autoFocus
          id={`question${numQuestions}`}
          name={`question${numQuestions}`}
          size="small"
          defaultValue={question}
        />
      </Grid>
    );
  };

  const deleteQuestion = () => { };

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
              fullWidth
              disabled
              size="small"
              id="firstName"
              name="firstName"
              label="First"
              value="name 1"
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              required
              fullWidth
              disabled
              id="lastName"
              name="lastName"
              size="small"
              label="Last"
              value="name 2"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              disabled
              fullWidth
              id="question1"
              name="question1"
              size="small"
              label="question 1"
              value="response 1"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              disabled
              id="question2"
              name="question2"
              size="small"
              label="question 2"
              value="response 2"
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
