import styled from "styled-components"

const Input = styled.input`
  font-size: 1.5rem;
  padding: 8px;
  height: 50px;
  width: 300px;
  border: 0;
  position: relative;
  background-color: #313131;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:focus {
    outline: 0;
    border: 1px solid #4464ad;
  }
`

const Button = styled.button`
  height: 50px;
  font-size: 1.5rem;
  padding: 8px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  &:hover {
    background-color: #5876bd;
  }
`

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  justify-content: center;

  Button {
    background-color: #4464ad;
    color: white;
    width: 150px;
  }
`

export { Input, Button, InputContainer }
