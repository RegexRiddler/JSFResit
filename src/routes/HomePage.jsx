// Dependencies //
import React, { useState, useEffect } from "react"
import axios from "axios"

// Compontents //
import SearchBar from "../components/SearchBar"
import Card from "../components/Card"

export default function HomePage () {
  const [pokemonCards, setPokemonCards] = useState([])

  useEffect(() => {
    axios
    .get("https://api.pokemontcg.io/v1/cards?setCode=base1")
    .then(result => setPokemonCards(result.data.cards))
  }, []);

  return (
    <main className="home">
      <SearchBar/>
      <div className="home__cards">
        {pokemonCards.map((item, key) => 
          <Card key={key} Id={item.id} Name={item.name} ImageUrl={item.imageUrl} CardDetails={item} />
        )}
      </div>
    </main>
  )
}