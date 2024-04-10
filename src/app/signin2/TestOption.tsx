"use client";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import { useRouter } from "next/navigation";

export default function TestOption({
  option,
  alternate,
  textColor,
  textAlpha,
}: {
  option: string | number;
  alternate: string;
  textColor?: string;
  textAlpha?: number;
}) {
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        zIndex: 10,
        pl: 1,
      }}
    >
      <Stack direction="row" spacing={1} alignItems="end">
        <Typography
          variant="body1"
          color={alpha(textColor ?? "#fff", textAlpha ?? 0.5)}
          fontSize="1.75rem"
          fontWeight="300"
          sx={{ pb: 1 }}
        >
          option
        </Typography>
        <Typography
          variant="body1"
          color={alpha(textColor ?? "#fff", textAlpha ?? 0.5)}
          fontSize="4rem"
          fontWeight="900"
          sx={{ p: 0 }}
        >
          {option}
        </Typography>
        <Button variant="text" onClick={() => router.push(alternate)}>
          <Typography
            variant="body1"
            color={alpha(textColor ?? "#fff", textAlpha ?? 0.5)}
            fontSize="1.25rem"
            fontWeight="300"
            textTransform="lowercase"
            sx={{
              textDecoration: "underline solid",
              textDecorationColor: alpha(
                textColor ?? "#fff",
                textAlpha ?? 0.25,
              ),
              pb: 0.5,
            }}
          >
            click here for alternate
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}
