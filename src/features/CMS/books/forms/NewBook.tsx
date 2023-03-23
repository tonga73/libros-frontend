import { useState, useRef } from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import OutlinedInput from "@mui/material/OutlinedInput"
import TextField from "@mui/material/TextField"

import FileUploadIcon from "@mui/icons-material/FileUpload"

import { CustomSelectInput } from "../../global/custom/CustomSelectInput"

export const NewBook = () => {
  const responseBody: { [key: string]: string } = {}
  const [books, setBooks] = useState<Book[]>([])
  const [publishedState, setPublishedState] = useState(false)

  const inputFileRefCover = useRef<HTMLInputElement>(null)
  const [cover, setCover] = useState("")

  const handleCreate = (obj: Book): void => {
    obj.id = Math.random()
    setBooks([...books, obj])
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    console.log(formData)
    formData.forEach(
      (value, property) => (responseBody[property] = value.toString())
    )
  }

  const handlePublishedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublishedState(event.target.checked)
  }

  const handleFileCover = () => {
    const files = inputFileRefCover.current?.files

    if (files) {
      const fileNames: string[] = Array.from(files).map((file) => file.name)
      const coverNames = fileNames.join(", ") // Unir nombres de archivos separados por coma
      setCover(coverNames)
    }
  }

  const selectValues = [
    {
      label: "Tipo",
      name: "type",
      options: ["Item Tipo"],
    },
    {
      label: "Genero",
      name: "genre",
      options: ["Item Genero"],
    },
    {
      label: "Ilustrador",
      name: "illustrator",
      options: ["Item 1"],
    },
    {
      label: "Editorial",
      name: "publisher",
      options: ["Item 1"],
    },
  ]

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      display="grid"
      gridTemplateColumns="60% 40%"
      gap={3}
      sx={{
        p: 3,
        "* > *": {
          color: "white",
        },
      }}
    >
      <Box
        display="grid"
        gap={1}
        sx={{
          "* > div": {
            bgcolor: "ActiveBorder",
          },
        }}
      >
        <Box component={TextField} name="name" label="Titulo" />

        <Box
          component={TextField}
          name="description"
          label="Descripcion"
          multiline
          rows={3}
        />

        <Box component={TextField} name="publicationDate" type="date" />

        {selectValues.map(({ label, name, options }, index) => (
          <CustomSelectInput
            key={index}
            name={name}
            label={label}
            options={options}
            variant="standard"
            value={"option"}
            onChange={() => {}}
          />
        ))}

        <Box
          component={OutlinedInput}
          name="cover"
          placeholder="Tapa"
          value={cover || ""}
          endAdornment={
            <Button
              endIcon={<FileUploadIcon />}
              variant="contained"
              component="label"
            >
              Subir
              <input
                hidden
                name="cover"
                accept="image/*"
                multiple
                type="file"
                ref={inputFileRefCover}
                onChange={handleFileCover}
              />
            </Button>
          }
        />

        <Box
          component={OutlinedInput}
          name="cover"
          placeholder="Tapa"
          value={cover || ""}
          endAdornment={
            <Button
              endIcon={<FileUploadIcon />}
              variant="contained"
              component="label"
            >
              Subir
              <input
                hidden
                name="cover"
                accept="image/*"
                multiple
                type="file"
                ref={inputFileRefCover}
                onChange={handleFileCover}
              />
            </Button>
          }
        />

        <Box component={TextField} label="CHAPTERS" />
      </Box>

      <Box>otherside</Box>

      <Box gridColumn="span 2" component={ButtonGroup} fullWidth>
        <Button value="submit-funeral" type="submit" variant="contained">
          Crear
        </Button>
      </Box>
    </Box>
  )
}
