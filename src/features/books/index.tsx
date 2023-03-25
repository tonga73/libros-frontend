import { BookForm } from "./forms/BookForm"

import { ImageGrid } from "../../components/ImageGrid"

import { useRecoilValue } from "recoil"
import { bookListSelector } from "../../selectors/booksSelector"

const index = () => {
  const bookList = useRecoilValue(bookListSelector)

  console.log(bookList[0])
  return (
    <div>
      <ImageGrid books={bookList} />
      <BookForm />
    </div>
  )
}

export default index
