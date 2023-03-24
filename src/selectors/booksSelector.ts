import { selector } from "recoil"

import { bookListState } from "../atoms/booksAtom"

export const bookListSelector = selector<Book[]>({
  key: "bookListSelector",
  get: async ({ get }) => {
    const bookList = get(bookListState)

    if (bookList.length === 0) {
      const response = await fetch("http://localhost:4000/books") // Llamada a la API utilizando fetch
      const data = await response.json()
      return data
    }

    return bookList
  },
})
