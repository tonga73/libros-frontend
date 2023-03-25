import { Landing } from "../scenes/Landing"

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
    element: "LIBROS",
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
