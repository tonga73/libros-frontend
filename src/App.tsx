import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import { Root } from "./layouts/Root"
import { CMS } from "./layouts/CMS"

// UTILITY ELEMENTS
import { ErrorPage } from "./scenes/ErrorPage"

// MAIN ELEMENTS
import { Landing } from "./scenes/Landing"

// CMS ELEMENTS
import CMSBooks from "./features/CMS/books"
import CMSDashboard from "./features/CMS/dashboard"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route path="/" element={<Root />}>
        <Route key="inicio" index element={<Landing />} />
        <Route key="bio" path="bio" element={"Bio"} />
        <Route key="" path="libros" element={"Libros"} />
        <Route key="" path="media" element={"Media"} />
        <Route key="" path="contacto" element={"Contacto"} />
      </Route>
      <Route path="CMS" element={<CMS />}>
        <Route key="" index element={<CMSDashboard />} />
        <Route key="" path="users" element={"USERS ADMIN"} />
        <Route key="" path="books" element={<CMSBooks />} />
        <Route key="" path="images" element={"IMAGES ADMIN"} />
        <Route key="" path="chapters" element={"CHAPTERS ADMIN"} />
        <Route key="" path="texts" element={"TEXTS ADMIN"} />
      </Route>
      {/* ... etc. */}
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
