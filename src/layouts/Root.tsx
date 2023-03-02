import React from "react"
import { Outlet } from "react-router-dom"

import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"

import TopBar from "../scenes/TopBar"

export const Root = () => {
  const theme = useTheme()

  return (
    <Box>
      <TopBar />
      <Outlet />
    </Box>
  )
}
