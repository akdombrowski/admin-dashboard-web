import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import type { ReactNode } from "react";

/**
 * TODO: since the handle___ fn's should always do the same thing for these buttons we don't need to pass them as arg's. instead we should just import them and call them. But, since they aren't ready for now, I'll leave it as a TODO
 */
export default function EditFormBtns({
  handleAdd,
  handleSave,
  handlePublish,
}: {
  handleAdd: () => void;
  handleSave: () => void;
  handlePublish: () => void;
}) {
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
          id="coachPublishButton"
          variant="contained"
          color="success"
          onClick={handlePublish}
        >
          Publish
        </Button>
      </Grid>
    </Grid>
  );
}
