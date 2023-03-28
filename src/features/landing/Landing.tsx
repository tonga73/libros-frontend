import React from "react"

import Box from "@mui/material/Box"

import Carousel from "../../components/Carousel"
import ChapterTextCard from "../../components/ChapterTextCard"
import ParticlesDefault from "../../components/ParticlesDefault"

import { useRecoilValue } from "recoil"
import { bookListState } from "../../recoil/book/bookAtom"

const Landing = () => {
  const bookList = useRecoilValue(bookListState)

  return (
    <Box display={"grid"}>
      <Carousel books={bookList} />
      <ChapterTextCard />
      <ParticlesDefault />
    </Box>
  )
}

export default Landing
