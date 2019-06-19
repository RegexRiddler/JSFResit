// Dependencies //
import React from "react"

// Compontents //
import SearchBar from "../components/SearchBar"
import Card from "../components/Card"

// Stylesheet //
import "../sass/routes/_home.sass"

export default function HomePage () {
  return (
    <main className="home">
      <SearchBar/>
      <div className="home__cards">
        <Card/>
      </div>
    </main>
  )
}