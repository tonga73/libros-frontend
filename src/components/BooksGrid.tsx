import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import { useRecoilState, useRecoilValue } from "recoil"
import { bookState, bookListState } from "../recoil/book/bookAtom"

export const BooksGrid = () => {
  const navigate = useNavigate()
  const bookList = useRecoilValue(bookListState)

  const covers = bookList.map(({ id, name, cover }) => ({
    id,
    name,
    cover,
  }))

  const handleSelectedBook = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    const altText = (event.target as HTMLImageElement).alt

    const selectedBook = bookList.find((book) => book.name === altText)

    if (selectedBook) {
      navigate(selectedBook.name!, { state: { bookId: selectedBook.id } })
    }
  }

  return (
    <Box component={Container} disableGutters fixed>
      <Box
        display="grid"
        gridTemplateColumns={`repeat(auto-fill, minmax(230.4px, 1fr))`}
        bgcolor="red"
      >
        {bookList.map((book, index) => (
          <Box
            key={index}
            id={`grid-book-${book.id}`}
            component="img"
            src={book.cover}
            alt={book.name}
            maxWidth="100%"
            onClick={handleSelectedBook}
            sx={{ objectFit: "contain" }}
          />
        ))}
      </Box>
    </Box>
  )
}
