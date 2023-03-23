import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { store } from "./app/store"
import { Provider } from "react-redux"

import { ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material/"
import theme from "./theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#171717" },
        }}
      />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
