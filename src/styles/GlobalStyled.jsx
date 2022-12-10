import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body{
    background-color: #1a1a1a;
    margin: 0;
    padding:0;
    box-sizing: border-box
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: white;
    list-style: none;
  }

  a{
    color: inherit;
  }
`

export default Global
