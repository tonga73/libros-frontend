// global
interface FileUploadPreview extends File {
  preview?: string
  cover?: Image | null | undefined
}

// MODELS
type Book = {
  id?: number
  name?: string
  description?: string
  publicationDate?: string
  type?: string
  genre?: string
  illustrator?: string
  publisher?: string
  cover?: Image | null | undefined
  backgroundImage?: string
}

type OptionalFile = Partial<File>

type Image = OptionalFile & {
  bookCoverId?: number
  id?: number
  url?: string
}
