import client from "../../api/client"
import { selector, SetRecoilState } from "recoil"
import {
  bookListState,
  bookState,
  bookDataState,
  selectedBookIdState,
  isCompletedAtom,
  isLoadingAtom,
} from "./bookAtom"

export const bookListSelector = selector<Book[]>({
  key: "bookListSelector",
  get: async ({ get }) => {
    const response = await client("/books")
    const { data } = response
    return data
  },
})

export const createBookSelector = selector({
  key: "createBookSelector",
  get: async ({ get }) => {
    const bookData = get(bookDataState)
    return client.post("/books", bookData).then((response) => response.data)
  },
  set: ({ set }, bookData) => {
    set(isLoadingAtom, true) // set isLoading to true
    set(isCompletedAtom, false) // set isCompleted to false
    set(createBookSelector, async ({ get, set }) => {
      const response = await client.post("/books", bookData)
      const { data } = response
      set(isLoadingAtom, false) // set isLoading to false
      set(isCompletedAtom, true) // set isCompleted to true
      return data
    })
  },
})

export const deleteBook = selector({
  key: "deleteBook",
  get: ({ get }) => get(bookState),
  set: async ({ set, get }, id) => {
    if (typeof id !== "number") {
      console.error("Invalid book id")
      return
    }
    try {
      const response = await client.delete(`/books/${id}`)
      if (!response) {
        throw new Error("Failed to delete book")
      }
      const books = get(bookListState)
      set(
        bookListState,
        books.filter((book) => book.id !== id)
      )
    } catch (error) {
      console.error(error)
    }
  },
})
