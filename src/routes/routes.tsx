import Books from "../features/books/Books"
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
  {
    path: "admin",
    element: "ADMIN",
  },
]

export default routes
