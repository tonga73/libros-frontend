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
  const [book, setBook] = useRecoilState(bookState)
  const [newBookMode, setNewBookMode] = useState(false)

  const covers = bookList.map(({ id, name, cover }) => ({
    id,
    name,
    cover,
  }))

  const handleSelectedBook = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const bookId = (e.target as HTMLImageElement).id.substring(
      "image-grid-".length
    )

    const selectedBook = bookList.find((book) => book.id === Number(bookId))

    if (selectedBook) {
      setBook(selectedBook)
    }
  }

  return (
    <Box component={Container} disableGutters fixed p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ placeSelf: "center" }}
      >
        <Button
          size="small"
          onClick={() => setNewBookMode(!newBookMode)}
          color={newBookMode ? "inherit" : "secondary"}
        >
          {newBookMode ? "Cancelar" : "Crear Libro"}
        </Button>
      </Box>
      {newBookMode ? (
        <BookForm book={book} />
      ) : (
        <ImageGrid onClick={handleSelectedBook} images={covers} />
      )}
    </Box>
  )
}

export default Books
