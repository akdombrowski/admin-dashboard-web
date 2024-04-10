"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Unstable_Grid2";

import { alpha, useTheme } from "@mui/material/styles";
import SignInWithGoogleBtn from "@/components/signInWithGoogleBtn";
import PageSections from "@/components/appbar/PageSections";
import AppBarLogo from "@/components/appbar/AppBarLogo";
import compact from "lodash-es/compact";

export default function AppAppBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const pathnameArr = compact(pathname.split("/"));

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      id="appBar"
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        boxShadow:
          "-80vw 0 10px -5px rgba(0, 0, 0, 1), 80vw 0 10px -5px rgba(0, 0, 0, 1)",
      }}
    >
      <Toolbar
        id="appBar-toolbar"
        variant="dense"
        sx={{
          minHeight: 35,
          maxHeight: 50,
          justifyContent: "center",
          alignItems: "stretch",
          width: "100%",
          backgroundColor: alpha("#000", 0.1),
          backdropFilter: "blur(25px)",
          borderWidth: "0 0 1px 0",
          borderStyle: "solid",
          borderColor: alpha("#000", 0.05),
          boxShadow:
            "0 0 10px -9px  rgba(0, 0, 0, 1), 50vw 0 10px -5px  rgba(0, 0, 0, 1), -50vw 0 10px -5px  rgba(0, 0, 0, 1)",
        }}
      >
        <Grid
          id="appbar-toolbarComponentsGridContainer"
          container
          flexWrap="nowrap"
          spacing={0}
          width="100%"
          justifyContent="center"
          alignItems="stretch"
          m={0}
        >
          <Grid
            id="appbar-logoGridContainer"
            display="flex"
            flexGrow={{ xs: 2, sm: 0 }}
            flexShrink={{ xs: 0, sm: 1 }}
            justifyContent="start"
            alignItems="stretch"
          >
            <AppBarLogo />
          </Grid>

          <Grid
            id="appbar-pageSectionsGrid"
            xs="auto"
            flexGrow={{ xs: 0, sm: 1 }}
            flexShrink={1}
            display={{ xs: "none", sm: "flex" }}
            justifyContent="center"
            alignItems="stretch"
          >
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="stretch"
              p={0}
            >
              <PageSections />
            </Box>
          </Grid>

          <Grid
            id="appbar-drawerGrid"
            xs={9}
            flexGrow={{ xs: "flex", sm: 0 }}
            pl={2}
            display={{ xs: "flex", sm: "none" }}
            justifyContent="left"
            alignItems="stretch"
          >
            <Button
              variant="text"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                color: theme.palette.success.light,
                minWidth: "30px",
                p: "4px",
              }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "60vw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
              >
                <MenuItem id="videos-menuItem" component={Link} href="/videos">
                  Videos
                </MenuItem>
                <MenuItem id="blogs-menuItem" component={Link} href="/blogs">
                  Blogs
                </MenuItem>
                <Divider />
              </Box>
            </Drawer>
          </Grid>

          <Grid
            id="appbar-pageTitle"
            xs="auto"
            display="flex"
            flexGrow={0}
            flexShrink={0}
            flexBasis="max-content"
            container
            justifyContent="space-between"
            alignItems="center"
            px={1}
          >
            <Grid pr={1}>
              <Typography
                variant="body1"
                align="right"
                textTransform="uppercase"
              >
                {pathnameArr.at(0) ?? "home"}
              </Typography>
            </Grid>
            <Grid pl={1}>
              <Typography
                variant="body1"
                align="right"
                textTransform="uppercase"
              >
                {pathnameArr.length > 1 ? `${pathnameArr.at(-1)}` : ""}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            id="appbar-socialLinksGrid"
            xs
            flexGrow={0}
            flexShrink={1}
            flexBasis="fit-content"
            display="flex"
            justifyContent="right"
            alignItems="stretch"
          >
            <SignInWithGoogleBtn
              btnSx={{
                my: "auto",
                // width: "100%",
                maxWidth: "100%",
                // height: "100%",
                height: "100%",
                px: 1,
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 1,
                borderColor: "white",
              }}
              iconSx={{
                maxWidth: "100%",
                // maxWidth: "100%",
                height: "100%",
                // maxHeight: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
