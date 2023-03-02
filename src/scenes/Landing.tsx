import React from "react"

import Box from "@mui/material/Box"

import Carousel from "../components/Carousel"

const books: Book[] = [
  {
    id: 1,
    title: "La Bestia",
    description:
      "Un niño nace con la marca de la bestia. Ha venido desde las tinieblas y tiene la protección del Diablo.",
    type: "Novela",
    coverImage:
      "http://hugomitoire.com/mediafiles/portada_libros/image843_sRPPYgI.png",
    backgroundImage:
      "http://hugomitoire.com/mediafiles/fondo_pantalla/bestiaBG.png",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    description: "Harper Lee",
    type: "Cuento",
    coverImage: "http://hugomitoire.com/mediafiles/portada_libros/image927.png",
    backgroundImage:
      "https://4.bp.blogspot.com/-93js0rTvKhE/Wk1--MsAoEI/AAAAAAAABkk/8H4LoviWScweD8NhgKJuGZuefgjzN4IgQCPcBGAYYCw/s1600/chancha%2Bpag%2B016%2By%2B17.jpg",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    description: "Jane Austen",
    type: "Novela",
    coverImage:
      "http://hugomitoire.com/mediafiles/portada_libros/image1081.png",
    backgroundImage:
      "https://4.bp.blogspot.com/-AtnuSAdwlZ8/Wl9GbyalWPI/AAAAAAAABp8/cOoivjQIuQUeKuIRDWFvTOk0ugCEQZIuACLcBGAs/s320/El%2Bcuco.jpg",
  },
]

export const Landing = () => {
  return (
    <Box>
      <Carousel books={books} />
    </Box>
  )
}
