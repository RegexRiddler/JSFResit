// Dependencies //
import React, { useState, useEffect } from "react"

// Stylesheet //
import "../sass/components/_card.sass"

export default function Card () {
  const [data, setData] = useState([])
  const api = "https://api.pokemontcg.io/v1/cards?setCode=base1"

  useEffect(() => {
    const fetchData = async () => {
      await fetch(api)
        .then(res => res.json())
        .then(data => setData(data.cards))
    }
    fetchData()
  }, [])
  
  console.log(data[0]);

  return (
    <div className="card">
      <img src="https://images.pokemontcg.io/base1/45.png" alt="caterpie"/>
      <div className="card__inner">
      </div>
    </div>
  )
}