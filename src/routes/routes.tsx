// LAYOUT COMPONENTS
import Root from "../layouts/Root"

// GLOBAL COMPONENTS
import Error404 from "../features/error-404/Error404"

// PAGE COMPONENTS
import Books, { BooksGrid, Book } from "../features/books/Books"
import Landing from "../features/landing/Landing"
import Media from "../features/media/Media"

export const mainRoutes = [
  { text: "Inicio", link: "/" },
  { text: "Bio", link: "/bio" },
  { text: "Libros", link: "/libros" },
  { text: "Media", link: "/media" },
  { text: "Contacto", link: "/contacto" },
]

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "bio",
        element: "BIO",
      },
      {
        path: "libros",
        element: <Books />,
        children: [
          {
            index: true,
            element: <BooksGrid />,
          },
          {
            path: ":id",
            element: <Book />,
          },
        ],
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "contacto",
        element: "CONTACTO",
      },
      {
        path: "admin",
        element: "ADMIN",
      },
    ],
  },
]

export default routes
