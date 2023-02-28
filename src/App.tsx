import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { RecoilRoot } from "recoil"

import { ThemeProvider } from "@mui/material/"
import theme from "./theme"

import { Root } from "./layouts/Root"
import { Landing } from "./scenes/Landing"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Landing />} />
      {/* ... etc. */}
    </Route>
  )
)

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
