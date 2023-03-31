import React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

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
      <Box
        component={Container}
        display="grid"
        gridTemplateColumns={`repeat(5, 1fr)`}
        gap={1}
        py={3}
        bgcolor="pink"
      >
        <ChapterTextCard />
        <ChapterTextCard />
        <ChapterTextCard />
        <ChapterTextCard />
        <ChapterTextCard />
      </Box>
      <ParticlesDefault />
    </Box>
  )
}

export default Landing
