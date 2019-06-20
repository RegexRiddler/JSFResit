// Dependencies //
import React, { useState } from "react"

// Components //
import CardDetails from "../components/CardDetails"

export default function PokemonPage (props) {
  const [isShowMore, setShowMore] = useState(false)
  const pokemonCard = props.location.state
  return (
    <main className="content-well">
      <div className="pokemon-container">
        <div className="pokemon-container__image-container">
          <img src={pokemonCard.imageUrl} alt={pokemonCard.name} />
        </div>
        <div className="pokemon-container__details">
          <div className="pokemon-container__card-details">
            <h1>{pokemonCard.name}</h1>
            <span className="pokemon__show-more" onClick={() => setShowMore(!isShowMore)}>
              {isShowMore ? "Show Less" : "Show More"}
            </span>
            {isShowMore ? <CardDetails PokemonDetails={pokemonCard} /> : null}
          </div>
        </div>
      </div>
    </main>
  )
}