// Dependencies //
import React from "react"

// Stylesheet //
import "../sass/components/_search-bar.sass"

export default function SearchBar ({ searchTerm }) {

  const handleInput = (event) => {
    searchTerm(event.target.value)
  }

  return (
    <div className="search">
      <input onChange={handleInput} type="search" aria-label="search for any Pokemon" placeholder="Search any Pokemon"/>
    </div>
  )
}