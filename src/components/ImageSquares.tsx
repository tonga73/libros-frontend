import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Typography from "@mui/material/Typography"

import HideImageIcon from "@mui/icons-material/HideImage"

import { ImageDetails } from "./ImageDetails"

interface ImageSquaresProps {
  images: Image[]
  cols?: number
  rowHeight?: number
  withDetails?: boolean
}

export const ImageSquares = ({
  images,
  cols,
  rowHeight,
  withDetails,
}: ImageSquaresProps) =>
  images.length > 0 ? (
    <ImageList
      sx={{ width: "100%" }}
      cols={cols || 3}
      rowHeight={withDetails ? rowHeight || "auto" : rowHeight || 200}
    >
      {images.map(({ id, url }, index) => (
        <ImageListItem
          key={index}
          onClick={() => {
            navigator.clipboard.writeText(url!)
          }}
          sx={{ cursor: "pointer" }}
        >
          <img
            id={`image-square-${id}`}
            src={url + "?w=164&h=164&fit=crop&auto=format"}
            srcSet={url + "?w=164&h=164&fit=crop&auto=format&dpr=2 2x"}
            alt={url}
            loading="lazy"
          />
          {withDetails ? <ImageDetails id={id!} /> : null}
        </ImageListItem>
      ))}
    </ImageList>
  ) : (
    <Box textAlign="center" sx={{ placeSelf: "center", opacity: 0.5 }}>
      <HideImageIcon sx={{ fontSize: "68px" }} />
      <Typography>No hay imagenes para tapa de libro disponibles.</Typography>
    </Box>
  )
