import React, { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

import { ImageGrid } from "../../components/ImageGrid"

import { BookForm } from "./forms/BookForm"

import { useRecoilState, useRecoilValue } from "recoil"
import {
  bookDataState,
  bookState,
  bookListState,
} from "../../recoil/book/bookAtom"
import {
  bookListSelector,
  createBookSelector,
} from "../../recoil/book/bookSelector"

const Books = () => {
  const bookList = useRecoilValue(bookListState)
  const [selectedBook, setSelectedBook] = useRecoilState(bookState)
  const [newBookMode, setNewBookMode] = useState(false)

  const covers = bookList.map(({ id, name, cover }) => ({
    id,
    name,
    cover,
  }))

  console.log("COVERS ", covers)

  const handleSelectedBook = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const bookId = (e.target as HTMLImageElement).id.substring(
      "image-grid-".length
    )

    const selectedBook = bookList.find((book) => book.id === Number(bookId))

    if (selectedBook) {
      setSelectedBook(selectedBook)
    }
  }

  return (
    <Box component={Container} disableGutters fixed p={3}>
      <Box>
        {bookList.map((book, index) => (
          <Box
            key={index}
            component="img"
            src={book.cover}
            height={100}
            width="100px"
          />
        ))}
      </Box>
    </Box>
  )
}

export default Books
