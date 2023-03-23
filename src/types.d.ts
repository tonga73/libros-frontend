// global
interface FileUploadPreview extends File {
  preview: string
}

// MODELS
type Book = {
  id?: number
  title?: string
  description?: string
  type?: string
  coverImage?: string
  backgroundImage?: string
}
