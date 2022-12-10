import styled from "styled-components"

export const ItemBookStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* gap: 3rem; */
  justify-content: center;
`

export const Cover = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 8px;
    width: 400px;
  }
`

export const Info = styled.div`
  h1 {
    font-size: 3rem;
  }

  h2 {
    color: #ddd;
  }

  ul {
    background-color: #121212;
    padding: 16px;
    margin-top: 3rem;
    border-radius: 8px;
  }

  li {
    font-size: 1.5rem;
  }
`
