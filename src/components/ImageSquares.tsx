import * as React from "react"
import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Typography from "@mui/material/Typography"

import HideImageIcon from "@mui/icons-material/HideImage"

import { useRecoilValue } from "recoil"
import { imageListState } from "../atoms/imageAtom"

interface ImageSquaresProps {
  images: Image[]
}

export const ImageSquares = ({ images }: ImageSquaresProps) =>
  images.length > 0 ? (
    <ImageList sx={{ width: "100%" }} cols={3} rowHeight={"auto"}>
      {images.map(({ id, url }, index) => (
        <ImageListItem key={index} sx={{ cursor: "pointer" }}>
          <img
            id={`image-square-${id}`}
            src={`http://localhost:4000${url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`http://localhost:4000${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={url}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  ) : (
    <Box textAlign="center" sx={{ placeSelf: "center", opacity: 0.5 }}>
      <HideImageIcon sx={{ fontSize: "68px" }} />
      <Typography>No hay imagenes para tapa de libro disponibles.</Typography>
    </Box>
  )
