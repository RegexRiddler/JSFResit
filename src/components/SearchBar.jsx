// Dependencies //
import React from "react"

// Stylesheet //
import "../sass/components/_search-bar.sass"

export default function SearchBar (props) {
  return (
    <div className="search">
      <input type="search" aria-label="search for any Pokemon" placeholder="Search any Pokemon"/>
    </div>
  )
}