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

import EditFormBtns from "@/ui/survey/EditFormBtns";

const templateQuestions = [
  "Template Question #1",
  "Template Question #2",
  "Template Question #3",
];

export default function EditSurveyForm() {
  const [questions, setQuestions] = useState<string[]>(templateQuestions);

  const addQuestion = () => {
    const newQNum = questions.length + 1;

    const question = `Question ${newQNum}`;
    const quests = [...questions, question];
    setQuestions(quests);
    return <Question questionNum={newQNum} question={question} />;
  };

  const handleAdd = () => {}

  const questionComponents = questions.map((q, i, qs) => {
    return <Question key={`question-${i}`} questionNum={i} question={q} />;
  });

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

          {questionComponents}

        </Grid>

        <Grid xs={12}>
          <Button
            fullWidth
            disabled
            id="clientSubmitBtn"
            variant="contained"
            color="success"
          >
            Submit Form
          </Button>
        </Grid>
      </Grid>
      <EditFormBtns
        handleAdd={handleAdd}
        handleSave={() => console.log("hallelujah! i've been saved!")}
        handlePublish={() => console.log("i'm now a published author")}
      />
    </Container>
  );
}
