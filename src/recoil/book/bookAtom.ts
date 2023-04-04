import { atom } from "recoil"

import { bookListSelector } from "./bookSelector"

export const bookDataState = atom<Book>({
  key: "bookDataState",
  default: {},
})

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

export const isLoadingAtom = atom({
  key: "isLoadingAtom",
  default: false,
})

export const isCompletedAtom = atom({
  key: "isCompletedAtom",
  default: false,
})
