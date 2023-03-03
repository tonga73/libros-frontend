import React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { motion, AnimatePresence } from "framer-motion"

import useWindowSize from "../utils/windowDimensions"

const chapters = [
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
      gridTemplateColumns="repeat(12, minmax(0, 1fr))"
      columnGap={{ xs: 0, sm: 5 }}
      rowGap={{ xs: 3, sm: 0 }}
      p={{ xs: 1, sm: 5 }}
      sx={{ placeItems: "center" }}
    >
      {chapters.map((chapter, index) => (
        <Box
          component={motion.div}
          whileTap={{ scale: 0.95 }}
          gridColumn={{
            xs: "span 12",
            sm: "span 4",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <Box
            sx={{
              width: { xs: (width! / 100) * 90, sm: "100%" },
              height: { xs: "330px", sm: width! / 5 },
              background: `url(${chapter.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            display="grid"
            height="100%"
            px={{ xs: 0, sm: 10 }}
            sx={{
              transform: { xs: "translateY(-55%)", sm: "translateY(-55%)" },
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily="cinzel">
              {chapter.type}
            </Typography>
            <Typography variant="h3">{chapter.name}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default FeaturedChapterTexts
