import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import TextField, { TextFieldProps } from "@mui/material/TextField"

interface CustomSelectInputProps {
  options: string[]
  [x: string]: any
}

export const CustomSelectInput = ({
  options,
  ...rest
}: CustomSelectInputProps) => {
  return (
    <Box {...rest} component={TextField} select>
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Box>
  )
}
