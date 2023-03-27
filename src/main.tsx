import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { ThemeProvider, GlobalStyles, CssBaseline, css } from "@mui/material/"

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
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
