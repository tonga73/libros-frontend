import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { useTheme } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import MenuIcon from "@mui/icons-material/Menu"

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const location = useLocation()

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
      <AppBar position="fixed" color="transparent" elevation={0}>
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
            color="inherit"
            aria-label="menu"
            sx={{ display: { lg: "none" } }}
            onClick={toggleDrawer}
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
                sx={{
                  color: theme.palette.common.white,
                  opacity: location.pathname === item.link ? 1 : 0.5,
                  "&:hover": {
                    opacity: 1,
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
            sx={{ display: { xs: "none", lg: "flex", justifyContent: "end" } }}
          >
            Social Buttons
          </Box>
        </Toolbar>
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
