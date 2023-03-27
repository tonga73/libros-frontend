import { createTheme, PaletteMode } from "@mui/material"

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string
      }
      secondary: {
        main: string
      }
      common: {
        white: string
        black: string
      }
      text: {
        primary: string
      }
      background: {
        default: string
        main: string
        paper: string
      }
    }
    typography: {
      fontFamily: {} | undefined
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const palette = {
  dark: {
    primary: {
      main: "#FFCC33",
    },
    secondary: {
      main: "#38bc95",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
    text: {
      primary: "#fffcf2",
    },
    background: {
      default: "#171717",
    },
  },
  light: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    text: {
      primary: "#333",
    },
    background: {
      default: "#ffffff",
    },
  },
  rainbow: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#ffa500",
    },
    text: {
      primary: "#ffff00",
    },
    background: {
      default: "#333333",
    },
  },
}

const createCustomTheme = (themeName: string) => {
  switch (themeName) {
    case "dark":
      return createTheme({
        palette: palette.dark,
        typography: {
          fontFamily: "Reggae One",
          allVariants: { color: "#f2f2f2" },
        },
      })
    case "light":
      return createTheme({
        palette: palette.light,
        typography: {
          fontFamily: "Reggae One",
          allVariants: { color: "#333" },
        },
      })
    case "rainbow":
      return createTheme({
        palette: palette.rainbow,
        typography: {
          fontFamily: "Reggae One",
          allVariants: { color: "#ffff00" },
        },
      })
    default:
      return createTheme({
        palette: palette.light,
        typography: {
          fontFamily: "Reggae One",
          allVariants: { color: "#333" },
        },
      })
  }
}

export default createCustomTheme
