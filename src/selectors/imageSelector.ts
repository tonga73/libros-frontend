import client from "../service/client"
import {
  selector,
  selectorFamily,
  GetRecoilValue,
  SetRecoilState,
} from "recoil"
import { imageFileState, imageListState } from "../atoms/imageAtom"

export const imageListSelector = selector<Image[]>({
  key: "imageListSelector",
  get: async ({ get }) => {
    const response = await client("/images")
    const { data } = await response
    return data
  },
})

export const deleteImageSelector = selector({
  key: "deleteImageSelector",
  get: async ({ get }) => {},
  set: async ({ set }, id) => {
    try {
      await client.delete(`/images/${id}`)
      set(imageFileState, null)
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
