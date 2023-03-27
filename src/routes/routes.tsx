import Books from "../features/books/Books"
import Landing from "../features/landing/Landing"
import Media from "../features/media/Media"

export const routes = [
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
  },
  {
    path: "media",
    element: <Media />,
  },
  {
    path: "contacto",
    element: "CONTACTO",
  },
]
