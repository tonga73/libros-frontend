import { useState, useMemo } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import { ThemeProvider, CssBaseline } from "@mui/material/"
import createCustomTheme from "./theme"

import { AnimatePresence } from "framer-motion"

import { useRecoilValue } from "recoil"
import { themeState } from "./recoil/theme/themeAtom"

// Layouts
import { Root } from "./layouts/Root"

// UTILITY ELEMENTS
import Error404 from "./features/error-404/Error404"

// MAIN ELEMENTS
import routes from "./routes/routes"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error404 />}>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Route>
  )
)

function App() {
  const themeMode = useRecoilValue(themeState)

  return (
    <>
      <ThemeProvider theme={createCustomTheme(themeMode)}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
