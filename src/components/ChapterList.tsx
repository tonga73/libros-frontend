import React, { useState } from "react"

import { alpha, useTheme } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"

import AssignmentIcon from "@mui/icons-material/Assignment"

export const ChapterList = () => {
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const PopoverContent = () => {
    return (
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Leer cuento o fragmento.</Typography>
      </Popover>
    )
  }

  return (
    <List sx={{ bgcolor: theme.palette.background.default }}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <ListItem
          key={index}
          divider
          secondaryAction={
            <>
              <IconButton
                color="primary"
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <AssignmentIcon />
              </IconButton>
              <PopoverContent />
            </>
          }
        >
          <ListItemText primary={`${item} TEXTO`} />
        </ListItem>
      ))}
    </List>
  )
}
