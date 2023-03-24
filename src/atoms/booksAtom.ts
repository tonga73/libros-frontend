import { atom } from "recoil"

export const bookListState = atom<Book[]>({
  key: "bookListState",
  default: [],
})
