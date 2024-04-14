import EditSurveyForm from "@/ui/survey/EditSurveyForm";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CoachSurvey() {
  return (
    <Grid container spacing={6} justifyContent="center" alignItems="stretch">
      <Grid xs={12} pb={6}>
        <EditSurveyForm />
      </Grid>
      <Grid xs={8} container justifyContent="space-between" alignItems="center">
        <Grid xs="auto">
          <Button id="coachSaveBtn" variant="contained" color="primary">
            <Typography variant="body1" textTransform="capitalize">
              Save
            </Typography>
          </Button>
        </Grid>
        <Grid xs="auto">
          <Button id="coachSaveBtn" variant="contained" color="warning">
            <Typography variant="body1" textTransform="lowercase" py={2}>
              + add a question
            </Typography>
          </Button>
        </Grid>
        <Grid xs="auto">
          <Button id="coachSaveBtn" variant="contained" color="primary">
            <Typography variant="body1" textTransform="capitalize">
              Publish
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
