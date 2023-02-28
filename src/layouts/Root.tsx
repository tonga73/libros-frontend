import React from "react"
import { Outlet } from "react-router-dom"

import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"

export const Root = () => {
  const theme = useTheme()

  console.log("theme: ", theme)

  return (
    <Box>
      <Outlet />
    </Box>
  )
}
