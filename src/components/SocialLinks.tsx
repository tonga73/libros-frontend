import React from "react"

import { useTheme, alpha } from "@mui/material"

import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"

import EmailIcon from "@mui/icons-material/Email"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"

const links = [
  {
    url: "",
    icon: <FacebookIcon />,
  },
  {
    url: "",
    icon: <InstagramIcon />,
  },
  {
    url: "",
    icon: <YouTubeIcon />,
  },
  {
    url: "",
    icon: <EmailIcon />,
  },
]

interface SocialLinksProps {
  icon: JSX.Element
  url: string
}

export const SocialLinks = () => {
  const { palette: colors } = useTheme()

  return (
    <Box display="flex">
      {links.map(({ icon, url }: SocialLinksProps, index) => (
        <IconButton
          key={index}
          sx={{
            color: alpha(colors.common.white, 0.7),
            "&:hover": {
              color: colors.common.white,
            },
          }}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  )
}
