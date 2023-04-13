import client from "../../api/client"
import { selector, SetRecoilState, selectorFamily } from "recoil"
import {
  bookListState,
  bookState,
  isCompletedAtom,
  isLoadingAtom,
} from "./bookAtom"

import { API_URL } from "../../api/client"

const baseApiPath = "/books/"

export const bookListSelector = selector<Book[]>({
  key: "bookListSelector",
  get: async ({ get }) => {
    const response = await client(baseApiPath)
    const { data } = response
    data.forEach((book: Book) => {
      book.cover = API_URL + book.cover
      book.secondaryImage = API_URL + book.secondaryImage
    })

    return data
  },
})

export const bookSelector = selectorFamily<Book, {}>({
  key: "bookSelector",
  get:
    (id) =>
    async ({ get }) => {
      const response = await client(baseApiPath + id)
      const { data } = response
      data.cover = API_URL + data.cover
      data.secondaryImage = API_URL + data.secondaryImage

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
