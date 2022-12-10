import styled from "styled-components"

const Img = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  transition: 0.3s ease scale;
  overflow: hidden;
  object-fit: cover;
  object-position: center top;

  &:hover {
    filter: brightness(0.6);
    scale: 1.05;
  }
`

const BookTitle = styled.h1`
  font-size: 1.5rem;
  max-width: 100%;
  margin-bottom: 0;
`

const BookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  color: white;
  margin: 0 auto;
  text-decoration: none;
  justify-content: center;
  p {
    margin: 0;
    color: #ddd;
  }
`

const BookItem = styled.div`
  width: 300px;
  height: 100%;
  cursor: pointer;

  div {
    overflow: hidden;
    border-radius: 8px;
  }
`

export const UserHelp = styled.p`
  text-align: center;
  color: #ddd;
  font-size: 1.5rem;
`

export { Img, BookTitle, BookContainer, BookItem }
