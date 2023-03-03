import { useState } from "react"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"

import HamburgerButton from "./HamburgerButton"

const NavigationDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <IconButton disableRipple>
        <HamburgerButton />
      </IconButton>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        COSO
      </Drawer>
    </>
  )
}

export default NavigationDrawer
