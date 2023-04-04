import React from "react"

import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { useRecoilState } from "recoil"
import { alertState } from "../recoil/app/appAtom"

const CustomAlert = ({ ...rest }) => <Alert {...rest} />

const FloatingAlert = () => {
  const [alert, setAlert] = useRecoilState(alertState)

  return Object.keys(alert).length > 0 ? (
    <Box
      display="grid"
      position="fixed"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="start"
      py={7}
      sx={{
        bgcolor: `rgba(23, 23, 23, 0.9)`,
        overflowY: "hidden",
        zIndex: 9999,
      }}
    >
      <CustomAlert {...alert} />
    </Box>
  ) : null
}

export default FloatingAlert
