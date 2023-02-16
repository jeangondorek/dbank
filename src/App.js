import React from "react";
import "./scss/App.scss";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import Cartao from "./components/Cartao";
import Botao from "./components/Botao";
import Institucional from "./components/Institucional";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero/>
      <Cartao/>
      <Botao/>
      <Institucional/>
      <FAQ />
    </div>
  );
}

export default App;
