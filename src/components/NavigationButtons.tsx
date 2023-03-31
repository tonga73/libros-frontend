import React from "react"
import { Link } from "react-router-dom"

import { alpha, useTheme } from "@mui/material"

import Box from "@mui/material/Box"
import Button from "@mui/material/Box"

const NavigationButtons = ({ routes }: Navigation) => {
  const theme = useTheme()

  const NavLink = ({ ...rest }) => {
    return <Button {...rest} component={Link} />
  }

  return (
    <>
      {routes.map(({ link, text }, index) => (
        <NavLink
          key={index}
          to={link}
          variant="contained"
          color="inherit"
          sx={{
            color:
              location.pathname === link
                ? alpha(theme.palette.common.white, 1)
                : alpha(theme.palette.common.white, 0.5),
            "&:hover": {
              color:
                location.pathname === link
                  ? null
                  : alpha(theme.palette.common.white, 0.7),
            },
          }}
        >
          {text}
        </NavLink>
      ))}
    </>
  )
}

export default NavigationButtons
