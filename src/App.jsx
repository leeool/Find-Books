import React from "react"

import { Container } from "./styles/ContainerStyled"
import Global from "./styles/GlobalStyled"
import Header from "./styles/HeaderStyled"
import Book from "./Book"
import Form from "./Form"
import ItemBook from "./ItemBook"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

const App = () => {
  const [result, setResult] = React.useState(null)

  return (
    <BrowserRouter>
      <Global />
      <Header>
        <a href="./">
          <h1>Find Books</h1>
        </a>
      </Header>
      <Container>
        <Form setResult={setResult} />
        <Routes>
          <Route path="/" element={<Book results={result} />} />
          <Route path="/:id" element={<ItemBook />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
