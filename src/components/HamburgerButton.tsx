import { useState } from "react"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"

const HamburgerButton = () => {
  const [isActive, setIsActive] = useState(false)

  const handleButtonClick = () => {
    setIsActive(!isActive)
  }

  return (
    <Box
      onClick={handleButtonClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: 27,
        height: 27,
        p: 0.5,
        position: "relative",
        bgcolor: "transparent",
        border: "none",

        "& .btn-line": {
          width: "100%",
          height: 2,
          background: "#f2f2f2",
          transition: "all 0.2s",
          position: "absolute",
        },

        "& .btn-line:nth-of-type(1)": {
          transform: isActive
            ? "translateY(0) rotate(45deg)"
            : "translateY(-7px)",
        },

        "& .btn-line:nth-of-type(2)": {
          opacity: isActive ? 0 : 1,
        },

        "& .btn-line:nth-of-type(3)": {
          transform: isActive
            ? "translateY(0) rotate(-45deg)"
            : "translateY(7px)",
        },
      }}
    >
      <Box className="btn-line" />
      <Box className="btn-line" />
      <Box className="btn-line" />
    </Box>
  )
}

export default HamburgerButton
