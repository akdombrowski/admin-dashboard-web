import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Unstable_Grid2";
import Typography, { type TypographyOwnProps } from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

import { type GridSize } from "@mui/material";
import { SyntheticEvent } from "react";

export default function Question({
  questionNum,
  handleDelete,
  question,
  label,
  labelSX,
  helperText,
  placeholder,
  defaultValue,
  gridSize,
}: {
  questionNum: number;
  handleDelete: (SyntheticEvent) => void;
  question?: string;
  label?: string;
  labelSX?: TypographyOwnProps["sx"];
  helperText?: string;
  placeholder?: string;
  defaultValue?: string;
  gridSize?: boolean | GridSize | undefined;
}) {
  const questionDefVal = question ?? `question${questionNum}`;
  return (
    <Grid xs={gridSize ?? 12} container alignItems="center" spacing={0}>
      {label && (
        <Grid xs="auto" flexGrow={1}>
          <Typography
            variant="subtitle1"
            fontSize=".75rem"
            sx={{ ...labelSX }}
            color="rgb(255 255 255 / .5)"
          >
            {label}
          </Typography>
        </Grid>
      )}
      <Grid xs="auto" flexGrow={1} display="flex" justifyContent="end">
        <IconButton
          id={String(questionNum)}
          onClick={handleDelete}
          sx={{ color: "rgb(254 109 115 / .5)", p: 0, pb: "1px" }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid xs={12}>
        <TextField
          hiddenLabel
          fullWidth
          id={`question${questionNum}`}
          name={`question${questionNum}`}
          size="small"
          placeholder={defaultValue ?? placeholder ?? question}
          defaultValue={defaultValue}
        />
      </Grid>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Grid>
  );
}
