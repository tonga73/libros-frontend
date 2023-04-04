import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { Loading } from "./Loading"

type ImageGridProps = {
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void
  images: Image[]
}

export const ImageGrid = ({ onClick, images = [] }: ImageGridProps) => {
  const [gridCols, setGridCols] = useState(8)

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={`repeat(${2}, 1fr)`}
      gap={1}
      p={1}
    >
      <AnimatePresence>
        {images.length <= 0 ? (
          <Loading message="no hay libros" noDots noAnimation />
        ) : (
          images.map(({ id, url, name }, index) => (
            <Box
              id={`image-grid-${id?.toString()}`}
              key={index}
              component={motion.img}
              src={
                url
                  ? import.meta.env.VITE_API_URL + url
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
              }
              height="250px"
              onClick={onClick}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              sx={{
                cursor: "pointer",
              }}
            />
          ))
        )}
      </AnimatePresence>
    </Box>
  )
}
