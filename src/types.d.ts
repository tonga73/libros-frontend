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
type User = {
  id: number
  username: string
  email: string
  password: string
  isVerified: boolean
  role: string

  name?: string
  type?: string
  profilePicture?: string

  googleId?: string
}

type Book = {
  id: number
  name: string
  description?: string
  publicationDate?: string
  type?: string
  cover?: string
  secondaryImage?: string

  genre?: Genre
  illustrator?: User
  publisher?: User
}

type Genre = {
  id: number
  name: string
  ageRange: string
}

type OptionalFile = Partial<File>

type Image = OptionalFile & {
  bookCoverId?: number
  id?: number
  url?: string
  filename?: string
}
