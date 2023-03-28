import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { useTheme, alpha } from "@mui/material"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import MenuIcon from "@mui/icons-material/Menu"

import { SocialLinks } from "./SocialLinks"

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const location = useLocation()

  console.log("THEME: ", theme)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const menuItems = [
    { text: "Inicio", link: "/" },
    { text: "Bio", link: "/bio" },
    { text: "Libros", link: "/libros" },
    { text: "Media", link: "/media" },
    { text: "Contacto", link: "/contacto" },
  ]

  const drawerContent = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} component="a" href={item.link}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0))",
        }}
      >
        <Container disableGutters>
          <Toolbar
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "min-content auto",
                lg: `repeat(3, minmax(auto, 1fr))`,
              },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{
                display: { lg: "none" },
                color: theme.palette.common.white,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  color="inherit"
                  to={item.link}
                  disableRipple
                  sx={{
                    color:
                      location.pathname === item.link
                        ? alpha(theme.palette.common.white, 1)
                        : alpha(theme.palette.common.white, 0.5),
                    "&:hover": {
                      color:
                        location.pathname === item.link
                          ? null
                          : alpha(theme.palette.common.white, 0.7),
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h3"
                component="div"
                fontFamily="cinzel"
                color={"white"}
              >
                Hugo mitoire
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", lg: "flex", justifyContent: "end" },
              }}
            >
              <SocialLinks />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: theme.breakpoints.values.sm } }}
      >
        {drawerContent}
      </Drawer>
    </>
  )
}

export default Header
