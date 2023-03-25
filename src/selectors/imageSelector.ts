import axios from "axios"
import { selector } from "recoil"
import { imageFileState } from "../atoms/imageAtom"

export const uploadImageSelector = selector<string>({
  key: "uploadImageSelector",
  get: async ({ get }) => {
    const imageFile = get(imageFileState)

    if (!imageFile) {
      throw new Error("Image file not found")
    }

    const formData = new FormData()

    // Agrega la comprobación de nulidad aquí
    if (imageFile) {
      formData.append("imageFile", imageFile)
    }

    const response = await axios.post(
      "http://localhost:4000/uploadImage",
      formData
    )

    return response.data.url
  },
})
