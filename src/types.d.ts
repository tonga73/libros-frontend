// global
interface FileUploadPreview extends File {
  preview: string
}

// MODELS
type Book = {
  id?: number
  name?: string
  description?: string
  type?: string
  cover?: Image
  backgroundImage?: string
}

type Image = {
  id?: number
  filename?: string
  url?: string
  type?: string
}
