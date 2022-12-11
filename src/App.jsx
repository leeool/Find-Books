import React from "react"

import { Container } from "./styles/ContainerStyled"
import Global from "./styles/GlobalStyled"
import Book from "./Book"
import Form from "./Form"
import ItemBook from "./ItemBook"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  const [result, setResult] = React.useState(null)

  return (
    <BrowserRouter>
      <Global />
      <Header />
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
