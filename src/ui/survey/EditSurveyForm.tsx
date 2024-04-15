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
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import Divider from "@mui/material/Divider";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Container from "@mui/material/Container";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import clientSubmit from "@/actions/survey/clientSubmit";
import Question from "@/ui/survey/Question";
import EditFormBtns from "@/ui/survey/EditFormBtns";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import AddIcon from "@mui/icons-material/Add";
import PublishIcon from "@mui/icons-material/Publish";
import SaveIcon from "@mui/icons-material/Save";

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

  const handleAdd = () => {};

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

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid rgba(255, 255, 255, .5)",
        }}
        elevation={10}
      >
        <BottomNavigation
          showLabels
          onChange={(event, newValue) => {
            /**
             * CALL SAVE, ADD, OR PUBLISH FUNCTIONS FROM HERE DEPENDING ON WHICH
             * BUTTON IS PRESSED
             *
             */
            if (newValue === "save") {
              // call save fn
            } else if (newValue === "addQ") {
              // ...
            } // ...
          }}
        >
          <BottomNavigationAction
            id="save"
            value="save"
            label="Save"
            icon={<SaveIcon />}
          />
          <BottomNavigationAction
            id="addQ"
            value="addQ"
            label="Add Question"
            icon={<AddIcon />}
          />
          <BottomNavigationAction
            id="publish"
            value="publish"
            label="Publish"
            icon={<PublishIcon />}
          />
        </BottomNavigation>
      </Paper>

      <SpeedDial
        ariaLabel="form actions"
        sx={{ position: "absolute", bottom: "10vh", right: "5vw" }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key={"add question"}
          icon={<AddIcon />}
          tooltipTitle="add question"
          tooltipOpen
        />
        <SpeedDialAction
          key={"save questions"}
          icon={<SaveIcon />}
          tooltipTitle="save"
          tooltipOpen
        />
        <SpeedDialAction
          key={"save & publish form"}
          icon={<PublishIcon />}
          tooltipTitle="publish"
          tooltipOpen
        />
      </SpeedDial>
    </Container>
  );
}
