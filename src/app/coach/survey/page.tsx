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

    </Grid>
  );
}
