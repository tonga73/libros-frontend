import { atom } from "recoil"

interface SelectedImage {
  id: number | null
}

export const imageSelectedState = atom<SelectedImage>({
  key: "imageFileState",
  default: {
    id: null,
  },
})

export const imageFileState = atom<File | null>({
  key: "imageFileState",
  default: null,
})

export const imageListState = atom<Image[]>({
  key: "imageListState",
  default: [],
})
