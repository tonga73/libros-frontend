import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"

import { useTheme } from "@emotion/react"

import Box from "@mui/material/Box"

import Header from "../components/Header"

export const Root = () => {
  return (
    <Box>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  )
}
