import React from "react"
import HeaderStyled from "../styles/HeaderStyled"
import Popup from "./Popup"

const Header = () => {
  const [trigger, setTrigger] = React.useState(false)

  const handleClick = () => {
    setTrigger(!trigger)
  }

  return (
    <HeaderStyled>
      <div>
        <a href="./">
          <h1>Find Books</h1>
        </a>
      </div>
      <div className="ajuda" onClick={handleClick}>
        <p>Ajuda</p>
      </div>
      <Popup
        trigger={trigger}
        children={
          <ul>
            <li>Utilize nomes em inglês</li>
            <li>Dicas: Harry Potter, Percy jackson, Frankenstein</li>
          </ul>
        }
        setTrigger={setTrigger}
      />
    </HeaderStyled>
  )
}

export default Header
