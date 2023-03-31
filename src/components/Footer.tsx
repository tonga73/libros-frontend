import React from "react"
import { Link } from "react-router-dom"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"

import { mainRoutes } from "../routes/routes"

const Footer = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(5, 1fr)`}
      rowGap={5}
      justifyContent="center"
      pb={7}
      pt={96}
      sx={{ placeItems: "center" }}
    >
      <Box
        component={Typography}
        variant="h3"
        fontFamily="cinzel"
        color={"white"}
        gridColumn="span 5"
      >
        Hugo mitoire
      </Box>
      {mainRoutes.map(({ link, text }, index) => (
        <Button
          key={index}
          component={Link}
          to={link}
          color="inherit"
          size="small"
        >
          {text}
        </Button>
      ))}
      <Box gridColumn="span 5" sx={{ userSelect: "none" }}>
        <Typography
          variant="caption"
          fontFamily="cinzel"
          textTransform="uppercase"
          letterSpacing={1.3}
        >
          © Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
