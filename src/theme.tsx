import { createTheme, PaletteMode } from "@mui/material"

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      mode: PaletteMode
      primary: {
        main: string
      }
      secondary: {
        main: string
      }
      text: {
        primary: string
      }
      background: {
        default: string
        main: string
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
    text: {
      primary: "#fffcf2",
    },
    background: {
      default: "#171717",
      main: "#ff0000",
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
      default: "#fff",
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
          allVariants: { color: "#FF0000" },
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
