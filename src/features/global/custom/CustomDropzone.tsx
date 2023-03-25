import React, { useCallback, useMemo, useState } from "react"
import {
  useDropzone,
  DropzoneOptions,
  DropEvent,
  FileRejection,
} from "react-dropzone"

import { makeStyles } from "@mui/material"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Input from "@mui/material/Input"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"

import { Add, Delete } from "@mui/icons-material"

interface DropzoneProps {
  name: string
  onDrop: (files: FileUploadPreview[]) => void
}

export function CustomDropzone({ name, onDrop }: DropzoneProps) {
  const [files, setFiles] = useState<FileUploadPreview[]>([])

  const handleDrop = useCallback(
    (
      acceptedFiles: File[],
      fileRejections: FileRejection[],
      event: DropEvent
    ) => {
      const myFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ) as FileUploadPreview[] // Convertimos el array de archivos a MyFile[]
      setFiles(myFiles)
      onDrop(myFiles)
    },
    [onDrop]
  )

  const handleRemove = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
    onDrop(newFiles)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  })

  return (
    <Box
      {...getRootProps()}
      sx={{ placeItems: "center", bgcolor: "ActiveBorder" }}
    >
      <Box component={Input} {...getInputProps({ name })} />
      {files.length === 0 && (
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
            <Typography>Arrastra el archivo para la tapa del libro.</Typography>
          )}
        </Box>
      )}
      {files.length > 0 && (
        <Box display="flex" height="100%">
          {files.map((file, index) => (
            <Box
              key={file.name}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box
                component="img"
                src={file.preview}
                alt={file.name}
                width="100%"
                sx={{ objectFit: "cover" }}
              />
              <Box py={1}>
                <IconButton onClick={() => handleRemove(index)}>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
