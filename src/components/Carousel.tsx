import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import useWindowSize from "../utils/windowDimensions"

type CarouselProps = {
  books: Book[]
}

export const Carousel = ({ books }: CarouselProps) => {
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
        backgroundImage: `url(${import.meta.env.VITE_API_URL}${
          book.secondaryImage?.url
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "30%", lg: "center" },
        backgroundAttachment: "fixed",
        minHeight: height,
        height: "min-content",
        overflowX: "hidden",
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, minmax(0, 1fr))"
        columnGap={1}
        pt={{ xs: 7, lg: 0 }}
        sx={{
          transition: "background-image 0.2s ease-in-out",
          placeItems: "center",
          background:
            "linear-gradient(to bottom, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23, 0.51) 51%, rgba(23, 23, 23, 1) 100%)",
        }}
      >
        <Box
          gridColumn={{ xs: "span 12", lg: "span 6" }}
          display="flex"
          flexDirection="column"
          rowGap={0.5}
          sx={{
            textAlign: "right",
            order: { xs: 2, lg: 0 },
            pl: {
              md: "20%",
            },
            py: { xs: 3, lg: 0 },
            px: { xs: 1.5 },
          }}
        >
          <Typography variant="h6" fontFamily="cinzel" fontWeight="bold">
            {book.type}
          </Typography>
          <Typography variant="h2" lineHeight="110%">
            {book.name}
          </Typography>
          <Typography variant="h5" fontWeight="bold" fontFamily="bellefair">
            {book.description}
          </Typography>
        </Box>
        <Box
          gridColumn={{ xs: "span 12", lg: "span 6" }}
          display="grid"
          gridAutoFlow="column"
          gap={3}
          sx={{
            alignItems: "center",
            transform: {
              xs: "translateX(25%)",
              md: "translateX(30%)",
              lg: "translateX(15%)",
            },
          }}
        >
          <AnimatePresence mode="popLayout">
            <Box
              component={motion.img}
              key={book.name}
              src={`${import.meta.env.VITE_API_URL}${book.cover?.url}`}
              alt={book.name}
              onDragEnd={next}
              sx={{
                height: {
                  xs: (height! / 5) * 2.5,
                  md: (height! / 5) * 3,
                  lg: (height! / 5) * 3.5,
                },
                position: "relative",
                bgcolor: "blue",
                margin: "0 auto",
              }}
              layout="position"
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -25, opacity: 0 }}
              transition={{ duration: 0.1 }}
              draggable
            />
            <Box
              component={motion.img}
              key={nextBook.name + "_next"}
              src={`${import.meta.env.VITE_API_URL}${nextBook.cover?.url}`}
              alt={nextBook.name}
              onClick={next}
              sx={{
                height: {
                  xs: (height! / 5) * 2,
                  md: (height! / 5) * 2.5,
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
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -25, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  )
}
