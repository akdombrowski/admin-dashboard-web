"use client";
import Image from "next/image";
import Box from "@mui/material/Box";

export default function AppBarLogo() {
  return (
    <Box
      id="appbarlogo-boxContainer"
      display="flex"
      maxWidth="100%"
      minHeight="50px"
      maxHeight="100%"
      justifyContent="left"
      alignItems="stretch"
      position="relative"
      sx={{ aspectRatio: 16 / 9 }}
    >
      <Image
        src={"/healthy-lifestyle-icon.png"}
        alt="guide's logo"
        style={{ overflow: "hidden", objectFit: "contain" }}
        fill
      />
    </Box>
  );
}