import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import Box from "@mui/material/Box"

type ImageGridProps = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  books?: Book[]
}

export const ImageGrid = ({ onClick, books = [] }: ImageGridProps) => {
  return (
    <Box display={"grid"} gridTemplateColumns={`repeat(8, 1fr)`} gap={1} p={1}>
      <AnimatePresence>
        {books.map(({ id, cover }, index) => (
          <Box
            id={`image-grid-${id?.toString()}`}
            key={index}
            component={motion.img}
            src={
              cover
                ? `http://localhost:4000${cover!.url}`
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
