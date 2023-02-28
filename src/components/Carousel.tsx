import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

type CarouselProps = {
  books: Book[]
}

const Carousel = ({ books }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => {
    setActiveIndex((i) => (i === books.length - 1 ? 0 : i + 1))
  }

  const prev = () => {
    setActiveIndex((i) => (i === 0 ? books.length - 1 : i - 1))
  }

  const book = books[activeIndex]
  const nextBook = books[activeIndex < books.length - 1 ? activeIndex + 1 : 0]

  return (
    <Box
      display="grid"
      sx={{
        backgroundImage: `url(${book.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        overflowX: "hidden",
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns="55% 35% 10%"
        sx={{
          placeItems: "center",
          background:
            "linear-gradient(to bottom, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23, 0.51) 51%, rgba(23, 23, 23, 1) 100%)",
        }}
      >
        <Box>
          <Typography>{book.title}</Typography>
          <Typography>{book.description}</Typography>
        </Box>
        <AnimatePresence mode="popLayout">
          <Box
            component={motion.img}
            key={book.title}
            src={book.coverImage}
            alt={book.title}
            sx={{
              position: "relative",
              maxWidth: "200px",
              margin: "0 auto",
            }}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <Box
            component={motion.img}
            key={book.title + "_next"}
            src={nextBook.coverImage}
            alt={nextBook.title}
            onClick={next}
            sx={{
              position: "relative",
              maxWidth: "200px",
              margin: "0 auto",
            }}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
      </Box>
    </Box>
  )
}

export default Carousel
