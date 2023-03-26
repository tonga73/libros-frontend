import { atom } from "recoil"

import { imageListSelector } from "../selectors/imageSelector"

export const imageFileState = atom<File | null>({
  key: "imageFileState",
  default: null,
})

export const imageListState = atom<Image[]>({
  key: "imageListState",
  default: [],
})
