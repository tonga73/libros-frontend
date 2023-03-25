import CMSBooks from "../features/CMS/books"
import CMSDashboard from "../features/CMS/dashboard"

export const CMSroutes = [
  {
    index: true,
    element: <CMSDashboard />,
  },
  {
    path: "users",
    element: "USERS ADMIN",
  },
  {
    path: "books",
    element: <CMSBooks />,
  },
  {
    path: "images",
    element: "images ADMIN",
  },
  {
    path: "chapters",
    element: "chapters ADMIN",
  },
  {
    path: "texts",
    element: "texts ADMIN",
  },
]
