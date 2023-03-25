// global
interface FileUploadPreview extends File {
  preview: string
}

// MODELS
type Book = {
  id?: number
  name?: string
  description?: string
  publicationDate?: string
  type?: string
  cover?: Image | null | undefined
  backgroundImage?: string
}

type Image = {
  id?: number
  filename?: string
  url?: string
  type?: string
}
