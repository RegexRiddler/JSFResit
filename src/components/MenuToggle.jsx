// Dependencies //
import React from "react"

// Stylesheet //
import "../sass/main.sass"

export default function MenuToggle ({ onMenuToggle }) {
  return (
    <div onClick={onMenuToggle}>
      <span>X</span>
    </div>
  )
}