import { atom } from "recoil"

export const bookListState = atom<Book[]>({
  key: "bookListState",
  default: [],
})

export const bookState = atom<Book>({
  key: "bookState",
  default: {},
})
