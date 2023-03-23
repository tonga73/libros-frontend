import { useState, useRef } from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import TextField from "@mui/material/TextField"

import FileUploadIcon from "@mui/icons-material/FileUpload"

// CMS-GLOBAL CUSTOM COMPONENTS
import { CustomSelectInput } from "../../../global/custom/CustomSelectInput"
import { CustomDropzone } from "../../../global/custom/CustomDropzone"

export const NewBook = () => {
  const responseBody: { [key: string]: string } = {}

  const inputFileRefCover = useRef<HTMLInputElement>(null)

  const [books, setBooks] = useState<Book[]>([])

  const [type, setType] = useState("")
  const [genre, setGenre] = useState("")
  const [illustrator, setIllustrator] = useState("")
  const [publisher, setPublisher] = useState("")
  const [cover, setCover] = useState<File | null>(null)

  const handleCreate = (obj: Book): void => {
    obj.id = Math.random()
    setBooks([...books, obj])
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    formData.forEach(
      (value, property) => (responseBody[property] = value.toString())
    )

    console.log(responseBody)
  }

  const handleDropCover = (files: File[]) => {
    setCover(files[0])
  }

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      display="grid"
      gridTemplateColumns="55% 43%"
      gap={3}
      sx={{
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

        <FormControl variant="filled">
          <InputLabel shrink htmlFor="date-input">
            Fecha de publicacion
          </InputLabel>
          <Box
            id="date-input"
            component={TextField}
            name="publicationDate"
            type="date"
            variant="filled"
          />
        </FormControl>

        <CustomSelectInput
          name="type"
          label="Tipo"
          options={["Novela", "Cuento"]}
          variant="standard"
          value={type}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setType(e.target.value)
          }
        />

        <CustomSelectInput
          name="genre"
          label="Genero"
          options={["Negro", "Fantastico"]}
          variant="standard"
          value={genre}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setGenre(e.target.value)
          }
        />

        <CustomSelectInput
          name="illustrator"
          label="Ilustrador"
          options={["Maco", "Otro"]}
          variant="standard"
          value={illustrator}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setIllustrator(e.target.value)
          }
        />

        <CustomSelectInput
          name="publisher"
          label="Editorial"
          options={["De la paz", "Ediciones B"]}
          variant="standard"
          value={publisher}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPublisher(e.target.value)
          }
        />

        <Box component={TextField} label="CHAPTERS" />
      </Box>

      <Box display="grid">
        <CustomDropzone name="cover" onDrop={handleDropCover} />
      </Box>

      <Box gridColumn="span 2" component={ButtonGroup} fullWidth>
        <Button value="submit-funeral" type="submit" variant="contained">
          Crear
        </Button>
      </Box>
    </Box>
  )
}
