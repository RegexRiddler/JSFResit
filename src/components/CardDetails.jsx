// Dependencies //
import React from "react"

export default function CardDetails (props) {
  const details = props.PokemonDetails
  
  return (
    <section className="card-details">
      {details.artist ? 
        <span>
          <h2>Artist:</h2>
          <p>{details.artist}</p>
        </span> : null}

      {details.attacks ?
        <span>
          <h2>Attacks:</h2>
          {details.attacks.map((item, key) => (
            <span key={key}>
              <h3>Name:</h3>
              <p>{item.name}</p>
              <h3>Damage:</h3>
              <p>{item.damage}</p>
              <h3>Cost:</h3>
              {item.cost.map((cost, key) => (
                <p key={key}>{cost}</p>
              ))}
              {item.text ? <h3>Text:</h3> : null}
              <p>{item.text}</p>
            </span>
          ))}
        </span> : null}
        
      {details.convertedRetreatCost ?
        <span>
          <h2>Converted Retreat Cost:</h2>
          <p>{details.convertedRetreatCost}</p>
        </span> : null}

      {details.hp ?
        <span>
          <h2>HP:</h2>
          <p>{details.hp}</p>
        </span> : null}

      {details.id ?
        <span>
          <h2>ID:</h2>
          <p>{details.id}</p>
        </span> : null}

      {details.imageUrl ?
        <span>
          <h2>Image URL:</h2>
          <p>{details.imageUrl}</p>
        </span> : null}

      {details.imageUrlHiRes ?
        <span>
          <h2>Image URL - High Res:</h2>
          <p>{details.imageUrlHiRes}</p>
        </span> : null}

      {details.nationalPokedexNumber ?
        <span>
          <h2>National Pokedex Number:</h2>
          <p>{details.nationalPokedexNumber}</p>
        </span> : null}

      {details.number ?
        <span>
          <h2>Number:</h2>
          <p>{details.number}</p>
        </span> : null}

      {details.rarity ?
        <span>
          <h2>Rarity:</h2>
          <p>{details.rarity}</p>
        </span> : null}

      {details.retreatCost ?
        <span>
          <h2>Retreat Cost:</h2>
          {details.retreatCost.map((cost, key) => (
            <p key={key}>{cost}</p>
          ))}
        </span> : null}

      {details.series ?
        <span>
          <h2>Series:</h2>
          <p>{details.series}</p>
        </span> : null}

      {details.set ?
        <span>
          <h2>Set:</h2>
          <p>{details.set}</p>
        </span> : null}

      {details.setCode ?
        <span>
          <h2>Set Code:</h2>
          <p>{details.setCode}</p>
        </span> : null}

      {details.subtype ?
        <span>
          <h2>Subtype:</h2>
          <p>{details.subtype}</p>
        </span> : null}

      {details.types ?
        <span>
          <h2>Types:</h2>
          {details.types.map((type, key) => (
            <p key={key}>{type}</p>
          ))}
        </span> : null}

      {details.weaknesses ?
        <span>
          <h2>Weaknesses:</h2>
          {details.weaknesses.map((weakness, key) => (
            <p key={key}>{weakness.type}</p>
          ))}
        </span> : null}

    </section>
  )
}