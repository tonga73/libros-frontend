import React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import { ImageSquares } from "../../components/ImageSquares"

import { useRecoilValue } from "recoil"
import {
  imageListSelector,
  imageSelector,
} from "../../recoil/image/imageSelector"

const Media = () => {
  const imageList = useRecoilValue(imageListSelector)

  // console.log("IMGLIST ", imageList)

  return (
    <Box component={Container} disableGutters>
      <ImageSquares images={imageList} cols={5} withDetails />
    </Box>
  )
}

export default Media
