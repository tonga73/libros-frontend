import React, { useState } from "react"
import { Outlet } from "react-router-dom"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

// BOOK PAGE COMPONENTS
import { BooksGrid } from "../../components/BooksGrid"
import { Book } from "../../components/Book"

const Books = () => {
  return <Outlet />
}

export { BooksGrid, Book }

export default Books
