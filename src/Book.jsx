import React from "react"
import {
  Img,
  BookTitle,
  BookContainer,
  BookItem,
  UserHelp
} from "./styles/BookStyled"
import defaultBook from "./default-book.png"
import { NavLink } from "react-router-dom"

const coverEndPoint = (isbn) => {
  if (!isbn) return defaultBook
  return `https://covers.openlibrary.org/b/olid/${isbn}-L.jpg`
}

const Book = ({ results }) => {
  if (!results) return <UserHelp>Pesquise um livro!</UserHelp>
  return (
    <BookContainer>
      {results.map((book) => (
        <NavLink key={book._version_} to={`${book.cover_edition_key}`}>
          <BookItem>
            <div>
              <Img src={coverEndPoint(book.cover_edition_key)} />
            </div>
            <BookTitle>{book.title}</BookTitle>
            <p>{book.author_name}</p>
          </BookItem>
        </NavLink>
      ))}
    </BookContainer>
  )
}

export default Book
