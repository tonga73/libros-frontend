import { ChangeEvent, useState, useEffect, useRef } from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import TextField from "@mui/material/TextField"

import FileUploadIcon from "@mui/icons-material/FileUpload"

import { CustomSelectInput } from "../../../components/CustomSelectInput"
import { CustomDropzone } from "../../../components/CustomDropzone"

import { ImageGrid } from "../../../components/ImageGrid"

import client from "../../../api/client"
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil"
import { bookDataState } from "../../../recoil/book/bookAtom"
import { createBookSelector } from "../../../recoil/book/bookSelector"
import { imageListSelector } from "../../../recoil/image/imageSelector"

interface BookFormProps {
  book?: Book
}

interface CustomFile extends File {
  originalname: string
}

interface BookFormField {
  type?: string
  name: string
  value?: string
  label: string
  multiline?: boolean
  minRows?: number
  options?: string[]
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void
}

export const BookForm = ({ book }: BookFormProps) => {
  const responseBody: { [key: string]: string } = {}

  const imageList = useRecoilValue(imageListSelector)

  // controlled inputs
  const [name, setName] = useState(book?.name || "")
  const [description, setDescription] = useState(book?.description || "")
  const [publicationDate, setPublicationDate] = useState(
    book?.publicationDate || ""
  )
  const [type, setType] = useState(book?.type || "")
  const [cover, setCover] = useState(book?.cover || null)
  const [genre, setGenre] = useState(book?.genre || "")
  const [illustrator, setIllustrator] = useState(book?.illustrator || "")
  const [publisher, setPublisher] = useState(book?.publisher || "")

  const bookFormFields: BookFormField[] = [
    {
      name: "name",
      value: name,
      label: "Titulo",
      onChange: (event) => setName(event.target.value),
    },
    {
      name: "description",
      value: description,
      label: "Descripcion",
      multiline: true,
      minRows: 2,
      onChange: (event) => setDescription(event.target.value),
    },
    {
      type: "date",
      name: "publicationDate",
      label: "",
      value: publicationDate,
      onChange: (event) => setPublicationDate(event.target.value),
    },
    {
      type: "select",
      name: "type",
      value: type,
      label: "Tipo",
      options: ["novela", "cuento"],
      onChange: (event) => setType(event.target.value),
    },
    {
      type: "select",
      name: "genre",
      value: genre,
      label: "Genero",
      options: ["Negro", "Fantastico"],
      onChange: (event) => setGenre(event.target.value),
    },
    {
      type: "select",
      name: "illustrator",
      value: illustrator,
      label: "Ilustrador",
      options: ["Maco", "Otro"],
      onChange: (event) => setIllustrator(event.target.value),
    },
    {
      type: "select",
      name: "publisher",
      value: publisher,
      label: "Editorial",
      options: ["De la paz", "Ediciones B"],
      onChange: (event) => setPublisher(event.target.value),
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if (cover) formData.append("cover", cover)

    formData.forEach(
      (value, property) => (responseBody[property] = value.toString())
    )

    try {
      const createdBook = await client.post(`/books/`, responseBody)

      console.log("created ", createdBook)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const {
      name = "",
      description = "",
      publicationDate = "",
      type = "",
      genre = "",
      illustrator = "",
      publisher = "",
      cover = null,
    } = book || {}
    setName(name)
    setDescription(description)
    setPublicationDate(publicationDate)
    setType(type)
    setGenre(genre)
    setIllustrator(illustrator)
    setPublisher(publisher)
    setCover(cover)
  }, [book])

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      display="grid"
      gridTemplateColumns="2fr 3fr"
      gap={3}
      py={3}
      sx={{
        "* > *": {
          color: "white",
        },
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns={`repeat(2, 1fr)`}
        gap={1}
        sx={{
          "* > div": {
            bgcolor: "ActiveBorder",
          },
        }}
      >
        {bookFormFields.map((field, index) => {
          switch (field.type) {
            case "select":
              return (
                <CustomSelectInput key={`${field.type}_${index}`} {...field} />
              )
            default:
              return (
                <Box
                  key={`${field.type}_${index}`}
                  component={TextField}
                  gridColumn="span 2"
                  {...field}
                />
              )
          }
        })}

        <Box component={TextField} label="CHAPTERS" />
      </Box>

      <Box maxHeight="500px" sx={{ overflowY: "scroll" }}>
        {cover ? (
          <Box
            component="img"
            height="100%"
            src={cover}
            sx={{
              objectFit: "contain",
            }}
          />
        ) : (
          <ImageGrid
            images={imageList}
            onClick={(e: React.MouseEvent<HTMLImageElement>) =>
              setCover(e.currentTarget.getAttribute("src"))
            }
          />
        )}
      </Box>

      <Box gridColumn="span 2" display="flex" justifyContent="end">
        <Button value="submit-funeral" type="submit" variant="contained">
          Crear
        </Button>
      </Box>
    </Box>
  )
}
