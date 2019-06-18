// Dependencies //
import React, { useState } from "react"
import { Link } from "react-router-dom"

// Components //
import MenuToggle from "./MenuToggle.jsx"

// Stylesheet //
import "../sass/main.sass"

export default function Header () {
  const [isMenuToggled, setMenuToggled] = useState(false)
  console.log(isMenuToggled);

  const toggleMenu = () => {
    setMenuToggled(!isMenuToggled)
  }

  return (
    <header className="header">
      <div className="header__content-well">
        <Link to="/" className="header__branding">PokeDex</Link>
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/grass">Grass</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className={`${"header__menu"} ${isMenuToggled ? "header__menu--active" : ""}`}  onClick={toggleMenu}>
          <nav>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/grass" onClick={toggleMenu}>Grass</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
        <MenuToggle ToggleState={isMenuToggled} onClick={toggleMenu}/>
      </div>
    </header>
  )
}