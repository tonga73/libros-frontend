import React from "react"

import Box from "@mui/material/Box"

export const ImageGrid = ({ books = [] }: { books?: Book[] }) => {
  return (
    <Box display={"grid"} gridTemplateColumns={`repeat(8, 1fr)`} py={1}>
      {books.map((book, index) =>
        book.cover ? (
          <Box
            component="img"
            src={`http://localhost:4000${book.cover!.url}`}
            height="250px"
          />
        ) : null
      )}
    </Box>
  )
}
