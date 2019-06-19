// Dependencies //
import React from "react"
import { Link } from "react-router-dom"

export default function Card (props) {
  return (
    <div className="card">
      <Link to={{pathname: `/pokemon/${props.Id}`, state: props.CardDetails}}>
        <img src={props.ImageUrl} alt={props.Name}/>
      </Link>
      <div className="card__inner"></div>
    </div>
  )
}