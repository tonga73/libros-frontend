import client from "../../api/client"
import { selector, SetRecoilState, selectorFamily } from "recoil"
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

export const createBookSelector = selectorFamily<Book | undefined, {}>({
  key: "createBookSelector",
  get:
    (id) =>
    async ({ get }) => {
      console.log("ID ", id)
      return undefined
    },
  set:
    (book) =>
    async ({ get }) => {
      console.log("BOOK ", book)
      // const response = await client.post(`/books/`, book)
      // const { data } = response

      // return data
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
