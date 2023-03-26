import Books from "../features/books"
import Landing from "../features/landing"

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
    element: "MEDIA",
  },
  {
    path: "contacto",
    element: "CONTACTO",
  },
]
