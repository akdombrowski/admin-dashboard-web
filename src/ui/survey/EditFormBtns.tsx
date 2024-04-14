"use client";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

export default function EditFormBtns(
  handleAdd: () => void,
  handleSave: () => void,
  handlePublish: () => void,
) {
  return (
    <Grid container>
      <Grid xs={3}>
        <Button
          fullWidth
          id="addBtn"
          variant="contained"
          color="success"
          onClick={handleAdd}
        >
          + Add
        </Button>
      </Grid>
      <Grid xs={3}>
        <Button
          fullWidth
          id="clientSubmitBtn"
          variant="contained"
          color="success"
          onClick={handleSave}
        >
          Save
        </Button>
      </Grid>
      <Grid xs={3}>
        <Button
          fullWidth
          id="clientSubmitBtn"
          variant="contained"
          color="success"
          onClick={handleSave}
        >
          Publish
        </Button>
      </Grid>
    </Grid>
  );
}
