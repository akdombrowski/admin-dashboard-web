import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link href="url-here">Guide</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
