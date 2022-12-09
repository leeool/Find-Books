import styled from "styled-components"

const Input = styled.input`
  font-size: 1.5rem;
  padding: 8px;
  width: 300px;
  border: 0;
`

const Button = styled.button`
  height: 100%;
  font-size: 1.5rem;
  padding: 8px;
  border: 0;
`

const InputContainer = styled.form`
  display: grid;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 12px;

  Button,
  Input {
    border: 1px solid black;
  }

  Button {
    grid-column: 1/-1;
    justify-self: center;
    background-color: #4464ad;
    color: white;
    border-radius: 4px;
    width: 150px;
  }

  Input {
    justify-self: flex-end;
    background-color: #242424;
    color: white;
    border: none;
    border-bottom: 1px white solid;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: 0.3s;

    &:focus {
      outline: none;
      outline: white solid 1px;
    }
  }

  select {
    justify-self: flex-start;
    font-size: 1.5rem;
    width: 300px;
    background-color: #242424;
    color: white;
    border: none;
    border-bottom: 1px white solid;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`

export { Input, Button, InputContainer }
