import type { ReactNode } from "react";

import AppAppBar from "@/components/appbar/AppAppBar";
import Toolbar from "@mui/material/Toolbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppAppBar />
      <Toolbar variant="dense" sx={{ minHeight: "5rem" }} />
      {children}
    </>
  );
}
