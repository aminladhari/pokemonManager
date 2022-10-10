import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import ContainerFluid from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PokemonCard from "./components/Card";

var data = require("./db.json");
export const Home = (): JSX.Element => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="mains">
      <div className="container-fluid">
        <Row md={3} className="m-1 p-1">
          <div className="add">
            <span className="m-5">Ajouter un Pokemon</span>
          </div>
        </Row>
        <div className="Poke-Container">
          {data.pokemons.map((pokemon: any) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
