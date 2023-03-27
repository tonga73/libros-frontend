import React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Carousel from "../../components/Carousel"

import { useRecoilValue } from "recoil"
import { bookListState } from "../../recoil/book/bookAtom"

const Landing = () => {
  const bookList = useRecoilValue(bookListState)

  return (
    <Box display={"flex"} sx={{ py: 3 }}>
      <Carousel books={bookList} />
    </Box>
  )
}

export default Landing
