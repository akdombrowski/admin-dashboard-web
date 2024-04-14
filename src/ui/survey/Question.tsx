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
import type { GridSize } from "@mui/material";

export interface EditableSurveyQuestion {
  [key: number]: string;
}

const templateQuestions: EditableSurveyQuestion = {
  1: "Template Question #1",
  2: "Template Question #2",
  3: "Template Question #3",
};

export default function Question({
  questionNum,
  question,
  gridSize,
}: {
  questionNum: number;
  question?: string;
  gridSize?: boolean | GridSize | undefined;
}) {
  const questionDefVal = question ?? `question${questionNum}`;

  return (
    <Grid xs={12}>
      <TextField
        hiddenLabel
        fullWidth
        id={`question${questionNum}`}
        name={`question${questionNum}`}
        size="small"
        defaultValue={questionDefVal}
      />
    </Grid>
  );
}
