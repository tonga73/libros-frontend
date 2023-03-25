import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import { AnimatePresence } from "framer-motion"

// Layouts
import { Root } from "./layouts/Root"
import { CMS } from "./layouts/CMS"

// UTILITY ELEMENTS
import { ErrorPage } from "./scenes/ErrorPage"

// MAIN ELEMENTS
import { routes } from "./routes/routes"
import { CMSroutes } from "./routes/CMSroutes"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route path="/" element={<Root />}>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Route>
      <Route path="CMS" element={<CMS />}>
        {CMSroutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Route>
      {/* ... etc. */}
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
