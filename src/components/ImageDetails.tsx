import React, { useEffect } from "react"

import { useRecoilValue, useRecoilState } from "recoil"
import { imageSelectedState } from "../recoil/image/imageAtom"
import { imageSelector } from "../recoil/image/imageSelector"

interface ImageDetailsProps {
  id: number
}

// background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0));

export const ImageDetails = ({ id }: ImageDetailsProps) => {
  const image = useRecoilValue(imageSelector(id))

  console.log("UN PEDAZO DE MI ENORME ", image)

  return <div>{image ? image.filename : "SIN DETALLES"}</div>
}
