import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import { AnimatePresence } from "framer-motion"

// Layouts
import { Root } from "./layouts/Root"

// UTILITY ELEMENTS
import Error404 from "./features/error-404"

// MAIN ELEMENTS
import { routes } from "./routes/routes"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error404 />}>
      {/* MAIN LAYOUT */}
      <Route path="/" element={<Root />}>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
