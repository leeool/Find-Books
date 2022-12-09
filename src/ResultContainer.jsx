import React from "react"
import Book from "./styles/Book"
import { Container } from "./styles/Book.styled"

const coverEndPoint = (isbn) => {
  if (!isbn) return "./default-book.png"
  return `https://covers.openlibrary.org/b/olid/${isbn}-L.jpg`
}

const ResultContainer = ({ results }) => {
  return (
    <Container>
      {results.map((result) => (
        <div key={result._version_}>
          <Book
            key={result._version_}
            title={result.title}
            src={coverEndPoint(result.cover_edition_key)}
          />
        </div>
      ))}
    </Container>
  )
}

export default ResultContainer
