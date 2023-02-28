import { createTheme, PaletteMode } from "@mui/material"

interface Theme {
  palette: {
    mode: PaletteMode
    primary: {
      main: string
    }
    secondary: {
      main: string
    }
    background: {
      default: string
    }
  }
  typography: {
    fontFamily: {} | undefined
  }
}

const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFCC33",
    },
    secondary: {
      main: "#38bc95",
    },
    background: {
      default: "#171717",
    },
  },
  typography: { fontFamily: "Reggae One" },
})

export default theme
