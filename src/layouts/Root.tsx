import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"

import { useTheme } from "@emotion/react"

import Box from "@mui/material/Box"

import FloatingAlert from "../components/FloatingAlert"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Root = () => {
  return (
    <>
      <FloatingAlert />
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default Root
