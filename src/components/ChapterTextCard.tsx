import React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

interface CardTextProps {
  children?: JSX.Element
}

const ChapterTextCard = () => {
  return (
    <Box
      display="grid"
      gridTemplateRows={`2fr 1fr`}
      bgcolor="blue"
      position="relative"
      minHeight={200}
    >
      <Box
        gridRow={`span 2`}
        px={5}
        bgcolor="red"
        position="absolute"
        sx={{
          gridRowStart: 2,
          gridRowEnd: 3,
          placeSelf: "center",
          alignSelf: "end",
        }}
      >
        <Typography>La Poseida</Typography>
      </Box>
    </Box>
  )
}

export default ChapterTextCard
