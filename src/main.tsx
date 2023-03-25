import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { ThemeProvider, GlobalStyles, CssBaseline, css } from "@mui/material/"
import theme from "./theme"

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"

const globalStyles = css`
  body {
    background-color: #171717;
  }
`

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading whale types...</div>}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
)
