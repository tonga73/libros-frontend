import React, { useCallback, useEffect, useState } from "react"
import {
  useDropzone,
  DropzoneOptions,
  DropEvent,
  FileRejection,
} from "react-dropzone"

import { makeStyles } from "@mui/material"
import { colors, alpha } from "@mui/material"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import Input from "@mui/material/Input"
import SvgIcon from "@mui/material/SvgIcon"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"

import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"

interface DropzoneProps {
  name: string
  onDrop: (files: FileUploadPreview) => void
  cover?: Image | undefined | null
  handleSaveImage: () => void
  children?: JSX.Element
}

export function CustomDropzone({
  name,
  onDrop,
  cover,
  handleSaveImage,
  children,
}: DropzoneProps) {
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
    ;(isDragActive || !cover) && setFile(null)
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
              maxHeight="45vh"
              sx={{ objectFit: "contain" }}
            />

            <Divider sx={{ bgcolor: colors.blueGrey[50] }} />

            <Box display="flex" justifyContent="space-between" p={1}>
              <IconButton onClick={() => handleRemove()}>
                <DeleteIcon />
              </IconButton>

              <Button
                disabled={!!file.cover?.url}
                onClick={handleSaveImage}
                variant="contained"
              >
                Guardar Tapa
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box component={Input} {...getInputProps({ name })} />
          <Box display="flex" height="100%">
            {isDragActive ? (
              <Box
                display="flex"
                height="50vh"
                mx="auto"
                sx={{ placeItems: "center" }}
              >
                <Typography textAlign="center">
                  Soltar la imagen para cargar ...
                </Typography>
              </Box>
            ) : (
              <Box
                display="grid"
                gridTemplateRows={`repeat(3, 1fr)`}
                height="50vh"
                gap={1}
                p={0.5}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  height="100%"
                  px={1}
                  sx={{
                    placeItems: "center",
                    border: `3px dashed ${alpha("#ffffff", 0.3)}`,
                  }}
                >
                  <Typography textAlign="center">
                    Arrastra aqui el archivo para la tapa del libro, o
                    selecciona uno de la lista.
                  </Typography>
                </Box>
                <Box gridRow="span 2" display="flex" mx="auto">
                  {children}
                </Box>
              </Box>
            )}
          </Box>
        </>
      )}
    </Box>
  )
}
