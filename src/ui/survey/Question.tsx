"use client";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";


import type { GridSize } from "@mui/material";


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
