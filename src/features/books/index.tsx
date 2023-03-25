import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import { ImageGrid } from "../../components/ImageGrid"

import { BookForm } from "./forms/BookForm"

import { useRecoilState, useRecoilValue } from "recoil"
import { bookState } from "../../atoms/booksAtom"
import { bookListSelector } from "../../selectors/booksSelector"
import React from "react"

const index = () => {
  const bookList = useRecoilValue(bookListSelector)
  const [book, setBook] = useRecoilState(bookState)

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
    <Box component={Container} disableGutters fixed>
      <ImageGrid onClick={handleSelectedBook} books={bookList} />
      <BookForm book={book} />
    </Box>
  )
}

export default index
