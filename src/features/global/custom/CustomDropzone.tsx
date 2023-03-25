import React, { useCallback, useEffect, useState } from "react"
import {
  useDropzone,
  DropzoneOptions,
  DropEvent,
  FileRejection,
} from "react-dropzone"

import { makeStyles } from "@mui/material"
import { colors } from "@mui/material"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import Input from "@mui/material/Input"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"

import { Add, Delete } from "@mui/icons-material"

interface DropzoneProps {
  name: string
  onDrop: (files: FileUploadPreview) => void
  cover?: Image | undefined | null
}

export function CustomDropzone({ name, onDrop, cover }: DropzoneProps) {
  const [file, setFile] = useState<FileUploadPreview | null>(null)

  const handleDrop = useCallback(
    (
      acceptedFiles: File[],
      fileRejections: FileRejection[],
      event: DropEvent
    ) => {
      const myFiles = acceptedFiles.map((file) => {
        const myFile: FileUploadPreview = Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
        if (cover) {
          myFile.cover = cover
        }
        return myFile
      })

      console.log(myFiles)
      setFile(null)
      setFile(myFiles[0])
      onDrop(myFiles[0])
    },
    [onDrop, cover]
  )

  const handleRemove = () => {
    if (cover) {
      return
    }

    setFile(null)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  })

  useEffect(() => {
    if (cover) {
      const updatedFile = Object.assign({}, file)
      updatedFile.cover = cover
      setFile(updatedFile)
    }
    isDragActive && setFile(null)
  }, [cover, isDragActive])

  return (
    <Box
      {...getRootProps()}
      sx={{ placeItems: "center", bgcolor: "ActiveBorder" }}
    >
      {file && (file.preview || file.cover) ? (
        <Box display="flex">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
          >
            <Box
              component="img"
              src={
                file.cover?.url
                  ? `http://localhost:4000${file.cover.url}`
                  : file.preview
              }
              alt={file.name}
              height="50vh"
              sx={{ objectFit: "contain" }}
            />

            <Box p={1}>
              <Divider sx={{ bgcolor: colors.blueGrey[50] }} />

              <IconButton onClick={() => handleRemove()}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box component={Input} {...getInputProps({ name })} />
          <Box
            display="flex"
            height="100%"
            width="50%"
            mx="auto"
            sx={{ placeItems: "center" }}
          >
            {isDragActive ? (
              <Typography>Soltar la imagen ...</Typography>
            ) : (
              <Typography>
                Arrastra el archivo para la tapa del libro.
              </Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  )
}
