import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const index = () => {
  const responseBody: { [key: string]: string } = {}
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    formData.forEach(
      (value, property) => (responseBody[property] = value.toString())
    )
    console.log(responseBody)
  }

  return (
    <Box>
      <Typography textTransform="uppercase" sx={{ opacity: 0.3 }}>
        Admin Books
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField label="Titulo" />
      </Box>
    </Box>
  )
}

export default index
