import { useState } from "react"
import { Link } from "react-router-dom"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"

import { NewBook } from "./forms/NewBook"

const index = () => {
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="10% auto"
        bgcolor="dark"
        sx={{ placeItems: "center" }}
      >
        <Box gridColumn="span 2" py={1}>
          <Typography textTransform="uppercase" sx={{ opacity: 0.3 }}>
            Admin Books
          </Typography>
        </Box>
      </Box>
      <Box display="grid" py={1}>
        <NewBook />
      </Box>
    </Box>
  )
}

export default index
