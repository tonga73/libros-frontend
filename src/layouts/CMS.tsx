import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

import { useTheme } from "@mui/material"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import NavTabs from "../features/CMS/global/NavTabs"

export const CMS = () => {
  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={1}>
        <Container>
          <NavTabs />
        </Container>
      </AppBar>

      <Outlet />
    </Box>
  )
}
