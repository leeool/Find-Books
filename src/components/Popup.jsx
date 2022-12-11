import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const StyledPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: #212121;
  padding: 32px;
  z-index: 2;
  border-radius: 8px;
  display: grid;
  justify-items: center;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.4rem;
  }

  li + li {
    margin-top: 0.5rem;
  }
`

const Bg = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000071;
`

const Button = styled.button`
  height: 50px;
  font-size: 1.5rem;
  padding: 8px;
  border: 0;
  margin-top: 2rem;
  cursor: pointer;
  background-color: #4464ad;
  color: white;
  width: 150px;
  border-radius: 4px;
  &:hover {
    background-color: #5876bd;
  }
`

const Popup = ({ children, trigger, setTrigger }) => {
  const handleClick = () => {
    setTrigger(!trigger)
  }
  return (
    <AnimatePresence>
      {trigger ? (
        <>
          <Bg></Bg>
          <StyledPopup
            as={motion.div}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h1>Ajuda</h1>
            {children}
            <Button onClick={handleClick}>Fechar</Button>
          </StyledPopup>
        </>
      ) : (
        ""
      )}
    </AnimatePresence>
  )
}

export default Popup
