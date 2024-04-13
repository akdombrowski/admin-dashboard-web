"use client";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

export default function HomePage() {
  const titleFontSize = "2rem";
  const subtitleFontSize = ".9rem";
  const contentFontSize = "1rem";
  const btnFontSize = "1rem";

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <Grid
        container
        columnSpacing={6}
        justifyContent="start"
        alignItems="flex-start"
      >
        <Grid xs={12}>
          <Typography component="h1" variant="h3" fontWeight={100}>
            Welcome to your <strong>Guide</strong> Home Page!
          </Typography>
        </Grid>
        <Grid xs={4} sm={6}>
          <Card>
            <CardActionArea component={Link} href="/coach/survey">
              <CardHeader
                title="Client Form"
                titleTypographyProps={{
                  fontSize: titleFontSize,
                  fontWeight: 700,
                }}
                subheader="Gather any info you need from your clients at any stage!"
                subheaderTypographyProps={{
                  pt: 1,
                  fontSize: subtitleFontSize,
                  fontWeight: 100,
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontSize={contentFontSize}
                  fontWeight={300}
                >
                  Viwe, Edit, and Configure the live status of your
                  client-facing questionnaire.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                fullWidth
                variant="text"
                component={Link}
                href="/coach/survey"
              >
                <Typography
                  variant="body1"
                  color="white"
                  fontSize={btnFontSize}
                  fontWeight={400}
                  textAlign="center"
                >
                  Edit your form...
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={4} sm={6}>
          <Card>
            <CardActionArea component={Link} href="/users">
              <CardHeader
                title="Client Data"
                titleTypographyProps={{
                  fontSize: titleFontSize,
                  fontWeight: 700,
                }}
                subheader="View client responses to help you decide how best to help each client!"
                subheaderTypographyProps={{
                  pt: 1,
                  fontSize: subtitleFontSize,
                  fontWeight: 100,
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontSize={contentFontSize}
                  fontWeight={300}
                >
                  Take a look at your client responses and related information.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth variant="text" component={Link} href="/users">
                <Typography
                  variant="body1"
                  color="white"
                  fontSize={btnFontSize}
                  fontWeight={400}
                  textAlign="center"
                >
                  View client data...
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={4} sm={6}>
          <Card>
            <CardActionArea component={Link} href="/coach/survey">
              <CardHeader
                title="Nav Card"
                titleTypographyProps={{
                  fontSize: titleFontSize,
                  fontWeight: 700,
                }}
                subheader="if another page was added"
                subheaderTypographyProps={{
                  pt: 1,
                  fontSize: subtitleFontSize,
                  fontWeight: 100,
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontSize={contentFontSize}
                  fontWeight={300}
                >
                  another nav card
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth variant="text" component={Link} href="/users">
                <Typography
                  variant="body1"
                  color="white"
                  fontSize={btnFontSize}
                  fontWeight={400}
                  textAlign="center"
                >
                  go to a page yet to exist...
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center">
          <Button variant="contained">
            <Typography variant="subtitle1">
              Copy Your Shareable Link
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
