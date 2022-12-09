import React from "react"
import { Button, Input, InputContainer } from "./styles/Input"
import axios from "axios"
import ResultContainer from "./ResultContainer"
import Global from "./styles/Global"
import Header from "./styles/Header"

const searchEndPoint = (type, search) => {
  return `http://openlibrary.org/search.json?${type}=${search}&availability&limit=8`
}

const App = () => {
  const [search, setSearch] = React.useState("")
  const [result, setResult] = React.useState(null)
  const [typeSearch, setTypeSearch] = React.useState("")

  const handleInput = ({ target }) => {
    setSearch(target.value)
  }

  const handleSelect = ({ target }) => {
    setTypeSearch(target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(search, typeSearch)
    if (!search) return

    const response = await axios
      .get(searchEndPoint(typeSearch, search))
      .then((response) => response.data.docs)

    // coverEndPoint(doc.cover_edition_key)

    setResult(response)
    console.log(response)
  }

  return (
    <div>
      <Global />
      <Header>
        <h1>Find Books</h1>
      </Header>
      <InputContainer onSubmit={handleSubmit}>
        <Input
          placeholder="Pesquise um livro"
          value={search}
          onChange={handleInput}
        />
        <select name="" id="" onChange={handleSelect}>
          <option disabled value="">
            selecione
          </option>
          <option value="author">Autor</option>
          <option value="title">Livro</option>
        </select>
        <Button>Procurar</Button>
      </InputContainer>
      {result && <ResultContainer results={result} />}
    </div>
  )
}

export default App
