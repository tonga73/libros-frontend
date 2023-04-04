// global
interface FileUploadPreview extends File {
  preview?: string
  cover?: string
}

interface Navigation {
  routes: { link: string; text: string }[]
  onClick?: () => void
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
  cover?: string
  secondaryImage?: string
}

type OptionalFile = Partial<File>

type Image = OptionalFile & {
  bookCoverId?: number
  id?: number
  url?: string
  filename?: string
}
