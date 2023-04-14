import { useLocation } from "react-router-dom"

import { alpha, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import { ChapterList } from "./ChapterList"

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
            <Typography variant="h3" pb={1}>
              {book.name}
            </Typography>
            <Box display="flex" alignItems="baseline">
              <Typography
                variant="subtitle1"
                fontFamily="cinzel"
                fontWeight="bold"
                color={alpha(theme.palette.text.primary, 0.7)}
              >
                {book.type} |&nbsp;
              </Typography>
              <Typography
                variant="subtitle2"
                fontFamily="cinzel"
                fontStyle="italic"
                textTransform="uppercase"
              >
                {book.genre?.name}
              </Typography>
            </Box>
            <Typography variant="h5" fontFamily="bellefair" p={1.5}>
              {book.description}
            </Typography>
          </Box>
          <Box display="grid" gap={1}>
            <ChapterList />
            <Box
              display="grid"
              gridTemplateColumns={`repeat(2, 1fr)`}
              gap={1}
              sx={{
                "& > :not(style)": {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  px: 1.5,
                  bgcolor: alpha(theme.palette.background.default, 0.9),
                },
              }}
            >
              <Box>
                <Typography variant="caption">Ilustrador</Typography>
                <Typography variant="h6">{book.illustrator?.name}</Typography>
              </Box>
              <Box>
                <Typography variant="caption">Editorial</Typography>
                <Typography variant="h6">{book.publisher?.name}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
