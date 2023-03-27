import client from "../../api/client"
import {
  selector,
  selectorFamily,
  GetRecoilValue,
  SetRecoilState,
} from "recoil"
import { imageFileState, imageListState, imageSelectedState } from "./imageAtom"

export const imageListSelector = selector<Image[]>({
  key: "imageListSelector",
  get: async ({ get }) => {
    const response = await client(`/images`)
    const { data } = response

    return data
  },
})

export const imageSelector = selectorFamily<Image | undefined, number>({
  key: "imageSelector",
  get:
    (id) =>
    async ({ get }) => {
      const response = await client(`/images/single/${id}`)
      const { data } = response

      return data
    },
})

export const deleteImageSelector = selector({
  key: "deleteImageSelector",
  get: async ({ get }) => {},
  set: async ({ set }) => {
    try {
      const response = await client.delete(`/images/${imageFileState}`)
      set(imageFileState, response.data)
    } catch (error) {
      console.log(error)
    }
  },
})

export const uploadImageSelectorFamily = selectorFamily<null, any>({
  key: "uploadImageSelectorFamily",
  get:
    (param) =>
    async ({ get }) => {
      const imageFile = get(imageFileState)

      if (!imageFile) {
        return null
      }

      const formData = new FormData()
      formData.append("imageFile", imageFile)

      console.log("DATA ", formData)

      try {
        const response = await client.post("/images", formData)

        return response.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },
})
