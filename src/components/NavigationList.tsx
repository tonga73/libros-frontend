import React from "react"
import { Link } from "react-router-dom"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

const Navigation = ({ routes, onClick }: Navigation) => {
  return (
    <List component={Box} textAlign="right">
      {routes.map(({ link, text }, index) => (
        <ListItemButton
          key={index}
          component={Link}
          to={link}
          onClick={onClick}
        >
          <ListItemText primary={text} sx={{ textAlign: "right" }} />
        </ListItemButton>
      ))}
    </List>
  )
}

export default Navigation
