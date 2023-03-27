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

import { ImageSquares } from "../../../components/ImageSquares"

import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil"
import { uploadImageSelectorFamily } from "../../../recoil/image/imageSelector"
import { imageFileState, imageListState } from "../../../recoil/image/imageAtom"

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

  const inputFileRefCover = useRef<HTMLInputElement>(null)

  const imageList = useRecoilValue(imageListState)

  const covers = imageList.filter(
    (image: Image) => !image.bookCoverId && image.type === "cover"
  )

  const [books, setBooks] = useState<Book[]>([])
  // controlled inputs
  const [name, setName] = useState(book?.name || "")
  const [description, setDescription] = useState(book?.description || "")
  const [publicationDate, setPublicationDate] = useState(
    book?.publicationDate || ""
  )
  const [type, setType] = useState(book?.type || "")
  const [genre, setGenre] = useState(book?.genre || "")
  const [illustrator, setIllustrator] = useState(book?.illustrator || "")
  const [publisher, setPublisher] = useState(book?.publisher || "")
  const [cover, setCover] = useState<Image | null>(book?.cover || null)
  const [preview, setPreview] = useState<File | null>(null)

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
      value: publicationDate,
      label: "Fecha de publicacion",
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

    console.log("bookForm res: ", responseBody)
  }

  const handleDropCover = (file: File) => {
    setPreview((preview) => file)
  }

  const handleCreateImage = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const uploadImage = await snapshot.getPromise(
          uploadImageSelectorFamily(preview)
        )
        if (uploadImage) {
          console.log("Upload successful", uploadImage)
        } else {
          console.log("Upload failed")
        }
      },
    []
  )

  useEffect(() => {
    const {
      name = "",
      description = "",
      publicationDate = "",
      type = "",
      genre = "",
      illustrator = "",
      publisher = "",
      cover = {},
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
            case "date":
              return (
                <Box
                  component={FormControl}
                  key={`${field.type}_${index}`}
                  variant="filled"
                  gridColumn={"span 2"}
                >
                  <InputLabel shrink htmlFor="date-input">
                    {field.label}
                  </InputLabel>
                  <Box
                    component={TextField}
                    name={field.name}
                    type={field.type}
                    value={field.value}
                    variant="filled"
                  />
                </Box>
              )
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

      <Box height="50vh">
        <CustomDropzone
          name="cover"
          onDrop={handleDropCover}
          cover={cover?.url ? cover : null}
          handleSaveImage={handleCreateImage}
        >
          <ImageSquares images={covers} />
        </CustomDropzone>
      </Box>

      <Box gridColumn="span 2" component={ButtonGroup} fullWidth>
        <Button value="submit-funeral" type="submit" variant="contained">
          Crear
        </Button>
      </Box>
    </Box>
  )
}
