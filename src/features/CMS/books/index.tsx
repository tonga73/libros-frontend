import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import { BookForm } from "./forms/BookForm"

import { useRecoilValue } from "recoil"
import { bookListSelector } from "../../../selectors/booksSelector"

const index = () => {
  const bookList = useRecoilValue(bookListSelector)

  return (
    <Box component={Container}>
      <Box
        display="grid"
        gridTemplateColumns="10% auto"
        bgcolor="dark"
        sx={{ placeItems: "center" }}
      >
        <Box gridColumn="span 2" py={1}>
          <Typography textTransform="uppercase" sx={{ opacity: 0.3 }}>
            Admin Books
          </Typography>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${8}, minmax(0, 1fr))`}
        columnGap={1}
      >
        {bookList.map(({ cover, name }, index) => (
          <Box
            key={index}
            component="img"
            width="100%"
            src={
              !!cover
                ? `http://localhost:4000${cover!.url}`
                : "https://cdn.dribbble.com/users/1053528/screenshots/11887031/search-not-found-empty-state_4x.png"
            }
            sx={{
              placeSelf: "center",
            }}
          />
        ))}
      </Box>
      <Box display="grid" py={1}>
        <BookForm />
      </Box>
    </Box>
  )
}

export default index
