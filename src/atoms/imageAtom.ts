import { atom } from "recoil"

export const imageFileState = atom<File | null>({
  key: "imageFileState",
  default: null,
})
