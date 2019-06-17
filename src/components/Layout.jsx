import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"

// Components //
import HomePage from "../routes/HomePage.jsx"
import GrassPage from "../routes/GrassPage.jsx"
import ContactPage from "../routes/ContactPage.jsx"
import PokemonPage from "../routes/PokemonPage.jsx"

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

import "../sass/main.sass"

function Layout() {
  return (
    <Router>
      <div>
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={HomePage}/>
            <Route path="/grass/" component={GrassPage}/>
            <Route path="/contact/" component={ContactPage}/>
            <Route path="/pokemon/:id" component={PokemonPage}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default Layout
