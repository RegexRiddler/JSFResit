// Dependencies //
import React from "react"

// Stylesheet //
import "../sass/main.sass"

export default function MenuToggle (props) {
  return (
    <div onClick={props.onClick} className={`${"menu-toggle"} ${props.ToggleState ? "menu-toggle--toggled" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}