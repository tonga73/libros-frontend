import { useLocation } from "react-router-dom"

import { alpha, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import { useRecoilValue } from "recoil"
import { bookState } from "../recoil/book/bookAtom"

export const Book = () => {
  const { state } = useLocation()
  const theme = useTheme()

  const book = useRecoilValue(bookState(state.bookId))

  console.log("BOOK ", book)

  return (
    <Box
      height="100vh"
      sx={{
        backgroundImage: `url(${book.secondaryImage})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        height="100%"
        bgcolor={alpha(theme.palette.background.default, 0.91)}
      >
        <Box
          component={Container}
          disableGutters
          fixed
          display="grid"
          gridTemplateColumns={`3fr 3fr 4fr`}
          gap={3}
          pt={"13vh"}
          sx={{ overflowY: "hidden" }}
        >
          {/* Book: cover */}
          <Box
            id={`grid-book-${book.id}`}
            component="img"
            src={book.cover}
            alt={book.name}
            maxWidth="100%"
            sx={{ objectFit: "contain" }}
          />

          {/* Book: type, name, description */}
          <Box sx={{ placeSelf: "center" }}>
            <Typography variant="subtitle1" fontFamily="cinzel">
              {book.type}
            </Typography>
            <Typography variant="h3">{book.name}</Typography>
            <Typography variant="h6" fontFamily="bellefair">
              {book.description}
            </Typography>
          </Box>
          <Box>3</Box>
        </Box>
      </Box>
    </Box>
  )
}
