import React from "react"
import { CustomDropzone } from "../../global/custom/CustomDropzone"

function ImageDropzoneForm() {
  const handleDrop = (file: File) => {
    console.log("File dropped: ", file)
  }

  const handleUploadImage = async (file: File) => {
    console.log("Uploading image: ", file)
  }

  return (
    <div>
      <CustomDropzone name="imageFile" onDrop={handleDrop} />
    </div>
  )
}

export default ImageDropzoneForm
