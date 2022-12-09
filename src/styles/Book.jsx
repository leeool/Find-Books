import React from "react"
import { Img, BookTitle, BookContainer } from "./Book.styled"

const Book = ({ src, title }) => {
  return (
    <>
      <BookContainer>
        <BookTitle>{title}</BookTitle>
        <Img src={src} />
      </BookContainer>
    </>
  )
}

export default Book
