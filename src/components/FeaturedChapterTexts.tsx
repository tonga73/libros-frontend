import React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { motion, AnimatePresence } from "framer-motion"

import useWindowSize from "../utils/windowDimensions"

const chapters = [
  {
    name: "La poseida sdadasd asd as dsad asdas",
    type: "cuento",
    imageUrl:
      "http://2.bp.blogspot.com/-HjQOozN-l38/Tan37BbyupI/AAAAAAAAA-A/QO2DRZOB3Lc/s1600/poseida.jpg",
  },
  {
    name: "La poseida",
    type: "cuento",
    imageUrl:
      "http://2.bp.blogspot.com/-HjQOozN-l38/Tan37BbyupI/AAAAAAAAA-A/QO2DRZOB3Lc/s1600/poseida.jpg",
  },
  {
    name: "La poseida",
    type: "cuento",
    imageUrl:
      "http://2.bp.blogspot.com/-HjQOozN-l38/Tan37BbyupI/AAAAAAAAA-A/QO2DRZOB3Lc/s1600/poseida.jpg",
  },
]

const FeaturedChapterTexts = () => {
  const size = useWindowSize()
  const { height, width } = size

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(2, ${width! / 2}px)`}
      columnGap={{ xs: 0, sm: 3 }}
      rowGap={{ xs: 3, sm: 5 }}
      py={{ xs: 1, sm: 5 }}
      sx={{ placeItems: "center" }}
    >
      {chapters.map(({ imageUrl, name, type }, index) => (
        <Box
          id="chapter-text-info"
          key={index}
          component={motion.div}
          maxWidth={`${width! / 2}px`}
          whileTap={{ scale: 0.95 }}
          gridColumn={{
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <Box
            sx={{
              placeItems: "center",
              width: { xs: (width! / 100) * 90, sm: "100%" },
              height: { xs: "330px", sm: width! / 5 },
              background: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              display="grid"
              gridAutoRows="min-content"
              alignContent="end"
              height="100%"
            >
              <Typography variant="h6" fontWeight="bold" fontFamily="cinzel">
                {type}
              </Typography>
              <Typography variant="h3">{name}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default FeaturedChapterTexts
