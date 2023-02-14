import React from "react";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import Cartao from "./components/Cartao";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero/>
      <Cartao/>
    </div>
  );
}

export default App;
