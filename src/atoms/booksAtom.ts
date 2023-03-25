import { atom } from "recoil"

import { bookListSelector } from "../selectors/booksSelector"

export const selectedBookIdState = atom<number | undefined>({
  key: "selectedBookIdState",
  default: undefined,
})

export const bookState = atom<Book>({
  key: "bookState",
  default: {},
})

export const bookListState = atom<Book[]>({
  key: "bookListState",
  default: bookListSelector,
})
