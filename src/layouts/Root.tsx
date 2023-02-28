import React from "react"
import { Outlet } from "react-router-dom"

import Box from "@mui/material/Box"

export const Root = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}
