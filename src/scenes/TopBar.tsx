import React from "react"

import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"

import MenuIcon from "@mui/icons-material/Menu"

import useWindowSize from "../utils/windowDimensions"

import HamburgerButton from "../components/HamburgerButton"

const TopBar = () => {
  const size = useWindowSize()
  const { height, width } = size

  console.log(size)

  return (
    <Box
      display="grid"
      gridTemplateColumns="min-content auto min-content"
      px={1}
      py={1.5}
      sx={{
        height: (height! / 100) * 7,
        width: width,
        position: "fixed",
        placeItems: "center",
        background: false
          ? "rgba(23, 23, 23, 1)"
          : "linear-gradient(to top, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23,0.51) 51%, rgba(23, 23, 23,1) 100%)",
      }}
    >
      <IconButton disableRipple>
        <HamburgerButton />
      </IconButton>
      <Typography
        variant="h3"
        fontFamily="cinzel"
        fontWeight="bold"
        textAlign="center"
      >
        Hugo Mitoire
      </Typography>
    </Box>
  )
}

export default TopBar
