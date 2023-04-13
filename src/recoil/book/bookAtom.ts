import { atom, atomFamily } from "recoil"

import { bookListSelector, bookSelector } from "./bookSelector"

export const bookState = atomFamily<Book, {}>({
  key: "bookState",
  default: (param) => bookSelector(param),
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
