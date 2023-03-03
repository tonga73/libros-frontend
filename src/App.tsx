import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import { Root } from "./layouts/Root"

import { ErrorPage } from "./scenes/ErrorPage"
import { Landing } from "./scenes/Landing"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route key="inicio" index element={<Landing />} />
      <Route key="bio" path="bio" element={"Bio"} />
      <Route key="" path="libros" element={"Libros"} />
      <Route key="" path="media" element={"Media"} />
      <Route key="" path="contacto" element={"Contacto"} />
      {/* ... etc. */}
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
