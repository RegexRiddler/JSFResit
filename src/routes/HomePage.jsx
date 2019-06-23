// Dependencies //
import React, { useState, useEffect } from "react"
import axios from "axios"

// Compontents //
import SearchBar from "../components/SearchBar"
import Card from "../components/Card"

export default function HomePage () {
  const [pokemonCards, setPokemonCards] = useState([])
  const [searchArray, setSearchArray] = useState([])

  useEffect(() => {
    axios
    .get("https://api.pokemontcg.io/v1/cards?setCode=base1")
    .then(result => {
      setPokemonCards(result.data.cards);
      setSearchArray(result.data.cards);
    })
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchArray(pokemonCards.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  return (
    <main className="home">
      <SearchBar searchTerm={handleSearch} />
      <div className="home__cards">
        {searchArray.map((item, key) => 
          <Card key={key} Id={item.id} Name={item.name} ImageUrl={item.imageUrl} CardDetails={item} />
        )}
      </div>
    </main>
  )
}