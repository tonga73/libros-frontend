import React from "react"
import { CustomDropzone } from "../../global/custom/CustomDropzone"

function ImageDropzoneForm() {
  const handleDrop = (files: File[]) => {
    console.log("Files dropped: ", files)
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
