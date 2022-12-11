import styled from "styled-components"

const HeaderStyled = styled.header`
  background-color: #4464ad;
  color: #fff;
  font-family: "Poppins", sans-serif;
  display: flex;
  place-content: center;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  padding: 0 32px;
  height: 100px;
  h1 {
    margin: 0;
  }

  .ajuda {
    font-size: 1.5rem;

    p {
      cursor: pointer;
      padding: 8px;

      &::selection {
        background-color: none;
      }

      &:hover {
        color: #ccc;
      }
    }
  }
`

export default HeaderStyled
