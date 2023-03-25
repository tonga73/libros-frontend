import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material/"
import theme from "./theme"

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading whale types...</div>}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: "#171717", color: "white" },
          }}
        />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
)
