"use client";
import "client-only";

import type { CSSProperties } from "react";
import type { TypographyStyleOptions } from "@mui/material/styles/createTypography";

import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: CSSProperties & TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    poster?: CSSProperties & TypographyStyleOptions;
  }

  interface Palette {
    posterColor: Palette["primary"];
  }

  interface PaletteOptions {
    posterColor?: PaletteOptions["primary"];
  }
}

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#005F73",
    },
    secondary: {
      main: alpha("#001AF0", 0.99),
    },
    background: {
      default: "#001219",
    },
    text: {
      primary: "#9CC4C4",
    },
    error: {
      main: "#9B2226",
    },
    divider: alpha("#AE2012", 0.99),
    success: {
      main: "#0A9396",
    },
    info: {
      main: "#E9D8A6",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 100,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
    fontWeightBold: 1000,
    poster: {
      fontSize: "4rem",
      fontWeight: 1000,
      lineHeight: 1.0,
    },
    h1: {
      fontSize: "5rem",
      fontWeight: 900,
      lineHeight: 1.0,
    },
    h2: {
      fontSize: "5rem",
      fontWeight: 100,
      lineHeight: 1.0,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 300,
      lineHeight: 1.0,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.0,
    },
    h5: {
      fontSize: "1.75rem",
      fontWeight: 100,
      lineHeight: 1.0,
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 1000,
      lineHeight: 1.0,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 100,
      lineHeight: 1,
    },
    subtitle2: {
      fontSize: ".9rem",
      fontWeight: 1000,
      lineHeight: 1.0,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 100,
      lineHeight: 1,
    },
    button: {
      fontSize: ".95rem",
      fontWeight: 500,
      lineHeight: 1,
    },
    caption: {
      fontSize: ".9rem",
      fontWeight: 100,
      lineHeight: 1.0,
    },
    overline: {
      fontSize: ".95rem",
      fontWeight: 100,
      lineHeight: 1.0,
    },
  },
});

/**
 *
 * Customize Palette
 *
 * with new colors using {augmentColor} to generate color tokens
 *
 */
export const customColorsTheme = createTheme(baseTheme, {
  // Custom colors created with augmentColor go here
  palette: {
    posterColor: baseTheme.palette.augmentColor({
      color: {
        main: "#E6E49F",
      },
      name: "posterColor",
    }),
  },
});

/**
 * Add posterColor to poster variant
 */
export const customTypographyTheme = createTheme(customColorsTheme, {
  typography: {
    poster: {
      color: customColorsTheme.palette.posterColor,
    },
  },
});

export const theme = responsiveFontSizes(customTypographyTheme, {});

export default theme;
