import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BooksState {
  books: Book[]
}

const initialState: BooksState = {
  books: [],
}

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload)
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload)
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const bookIndex = state.books.findIndex(
        (book) => book.id === action.payload.id
      )
      if (bookIndex !== -1) {
        state.books[bookIndex] = action.payload
      }
    },
  },
})

export const { addBook, removeBook, updateBook } = booksSlice.actions

export default booksSlice.reducer
