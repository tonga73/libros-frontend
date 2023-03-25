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
    text: {
      primary: string
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
    },
  },
  typography: { fontFamily: "Reggae One", allVariants: { color: "#fffcf2" } },
})

export default theme
