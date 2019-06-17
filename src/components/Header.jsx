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
  return (
    <header className="header">
      <h1 className="header__branding">PokeDex</h1>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/grass">Grass</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <MenuToggle onMenuToggle={() => {setMenuToggled(!isMenuToggled)}}/>
    </header>
  )
}