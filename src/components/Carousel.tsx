import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import useWindowSize from "../utils/windowDimensions"

type CarouselProps = {
  books: Book[]
}

const Carousel = ({ books }: CarouselProps) => {
  const size = useWindowSize()
  const { height, width } = size

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
        height: height,
        overflowX: "hidden",
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "80% 20%", lg: "55% 35% 10%" }}
        gridTemplateRows={{ xs: "70% 10%", lg: "auto" }}
        columnGap={1}
        sx={{
          transition: "background-image 0.2s ease-in-out",
          placeItems: "center",
          background:
            "linear-gradient(to bottom, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23, 0.51) 51%, rgba(23, 23, 23, 1) 100%)",
        }}
      >
        <Box
          gridColumn={{ xs: "span 2", lg: "span 1" }}
          sx={{
            order: { xs: 2, lg: 0 },
            textAlign: "right",
            p: 3,
            pl: {
              md: "20%",
            },
          }}
        >
          <Typography variant="h6" fontFamily="cinzel" fontWeight="bold">
            {book.type}
          </Typography>
          <Typography variant="h2">{book.title}</Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            fontFamily="bellefair"
            sx={{
              py: 1.5,
            }}
          >
            {book.description}
          </Typography>
        </Box>
        <Box
          gridColumn={{ xs: "span 2", lg: "span 1" }}
          display="grid"
          gridAutoFlow="column"
          gap={3}
          sx={{
            alignItems: "center",
            transform: "translateX(25%)",
          }}
        >
          <AnimatePresence mode="popLayout">
            <Box
              component={motion.img}
              key={book.title}
              src={book.coverImage}
              alt={book.title}
              sx={{
                height: {
                  xs: (height! / 5) * 2.5,
                  lg: (height! / 5) * 3.5,
                },
                position: "relative",
                bgcolor: "blue",
                margin: "0 auto",
              }}
              layout="position"
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
                height: {
                  xs: (height! / 5) * 2,
                  lg: (height! / 5) * 3,
                },
                position: "relative",
                margin: "0 auto",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(105%)",
                  opacity: 0.3,
                },
              }}
              layout="position"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  )
}

export default Carousel
