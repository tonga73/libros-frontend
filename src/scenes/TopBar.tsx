import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "@mui/material"
import { useMediaQuery } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import MenuIcon from "@mui/icons-material/Menu"

import { motion } from "framer-motion"

import useWindowSize from "../utils/windowDimensions"

import Navigation from "../components/Navigation"
import NavigationDrawer from "../components/NavigationDrawer"

const TopBar = () => {
  const { pathname } = useLocation()
  const size = useWindowSize()
  const { height, width } = size
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [colorizeOnScroll, setColorizeOnScroll] = useState(false)

  return (
    <AppBar
      id="header"
      component={motion.div}
      initial={{ opacity: 0, top: -50 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.3 }}
      sx={{ opacity: 0.7, boxShadow: 0 }}
      style={{
        transition: "background ease 3ms",
        background: colorizeOnScroll
          ? "rgba(23, 23, 23, 1)"
          : "linear-gradient(to top, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23,0.51) 51%, rgba(23, 23, 23,1) 100%)",
      }}
      position={pathname === "/" ? "fixed" : "sticky"}
    >
      <Container maxWidth="xl">
        <Box display="grid" gridTemplateColumns="repeat(12, minmax(0, 1fr))">
          <Box gridColumn={{ xs: "span 2", lg: "span 4" }}>
            <Toolbar disableGutters>
              {matches ? (
                <NavigationDrawer />
              ) : (
                <Box>
                  <Navigation />
                </Box>
              )}
            </Toolbar>
          </Box>
          <Box
            gridColumn={{ xs: "span 8", lg: "span 4" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h3"
              noWrap
              component={Link}
              to="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Cinzel",
                fontWeight: 500,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              Hugo Mitoire
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                display: { xs: "flex", md: "none" },
                fontFamily: "Cinzel",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Hugo Mitoire
            </Typography>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default TopBar
