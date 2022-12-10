import React from "react"
import { Button, Input, InputContainer } from "./styles/InputStyled"
import axios from "axios"

const searchEndPoint = (search) => {
  return `https://openlibrary.org/search.json?title=${search}&availability&limit=9`
}

const Form = ({ setResult }) => {
  const [search, setSearch] = React.useState("")

  const handleInput = ({ target }) => {
    setSearch(target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!search) return

    const response = await axios
      .get(searchEndPoint(search))
      .then((response) => response.data.docs)

    setResult(response)
    console.log(response)
  }

  return (
    <InputContainer onSubmit={handleSubmit}>
      <Input
        placeholder="Pesquise um livro"
        value={search}
        onChange={handleInput}
      />
      <Button>Procurar</Button>
    </InputContainer>
  )
}

export default Form
