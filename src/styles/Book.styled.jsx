import styled from "styled-components"

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 400px;
  border-radius: 4px;
  border: 1px solid #444;
  transition: 0.2s;
`

const BookTitle = styled.h1`
  font-size: 1.5rem;
  max-width: 100%;
`

const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  max-width: 1600px;
  justify-content: center;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
`

const BookContainer = styled.div`
  display: grid;
  color: white;
  width: 350px;
  background-color: #4464ad;
  padding: 12px;
  margin: 0 auto;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover Img {
    filter: brightness(0.6);
    scale: 1.01;
  }
`

export { Img, BookTitle, Container, BookContainer }
