import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import Box from "@mui/material/Box"

type ImageGridProps = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  images: Image[]
}

export const ImageGrid = ({ onClick, images = [] }: ImageGridProps) => {
  return (
    <Box display={"grid"} gridTemplateColumns={`repeat(8, 1fr)`} gap={1} p={1}>
      <AnimatePresence>
        {images.map(({ id, url, name }, index) => (
          <Box
            id={`image-grid-${id?.toString()}`}
            key={index}
            component={motion.img}
            src={
              url
                ? `http://localhost:4000${url}`
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
        ))}
      </AnimatePresence>
    </Box>
  )
}
