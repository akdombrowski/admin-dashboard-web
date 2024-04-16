import CoachViewEditForm from "@/ui/survey/CoachViewEditForm";

import Grid from "@mui/material/Unstable_Grid2";

export default function CoachSurvey() {
  return (
    <Grid container spacing={6} justifyContent="center" alignItems="stretch">
      <Grid xs={12} pb={6}>
        <CoachViewEditForm />
      </Grid>
    </Grid>
  );
}
