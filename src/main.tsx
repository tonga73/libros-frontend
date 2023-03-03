import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { RecoilRoot } from "recoil"

import { ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material/"
import theme from "./theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: { backgroundColor: "#171717" },
      }}
    />
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
)
