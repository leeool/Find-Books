import axios from "axios"
import React from "react"
import { useParams } from "react-router-dom"
import { Cover, Info, ItemBookStyled } from "./styles/ItemBookStyled"

const coverEndPoint = (isbn) => {
  if (!isbn) return defaultBook
  return `https://covers.openlibrary.org/b/olid/${isbn}-L.jpg`
}

const bookEndPoint = (id) => {
  return `https://openlibrary.org/books/${id}.json`
}

const ItemBook = () => {
  const [book, setBook] = React.useState()
  const { id } = useParams()

  React.useEffect(() => {
    axios.get(bookEndPoint(id)).then((response) => setBook(response.data))

    console.log("book:", book)
  }, [id])

  const getAuthor = () => {
    if (book.contributors) return book.contributors[0].name
    if (book.author_name) return book.author_name
    if (book.contributions) return book.contributions
  }

  if (!book) return <h1>Livro nao encontrado</h1>
  return (
    <ItemBookStyled>
      <Cover>
        <img src={coverEndPoint(id)} alt="" />
      </Cover>
      <Info>
        <h1>{book.title}</h1>
        <h2>{getAuthor()}</h2>
        <ul>
          <li>Ano de Publicação: {book.publish_date}</li>
          <li>Local de Publicação: {book.publish_places}</li>
        </ul>
      </Info>
    </ItemBookStyled>
  )
}

export default ItemBook
