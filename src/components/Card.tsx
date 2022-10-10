import Card from "react-bootstrap/Card";
import React from "react";

export default function PokemonCard({ pokemon }: any) {
  return (
    <>
      <Card className="m-1">
        <Card.Img variant="top" src={pokemon.imageUrl} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            {pokemon.description}
          </Card.Text>
          <span style={{ textAlign: "left" }}>Taille: {pokemon.size} cm</span>
          <span style={{ textAlign: "right" }}>
            Poids: {pokemon.weight} kg{" "}
          </span>
          <p style={{ textAlign: "left" }}>Type: {pokemon.type} </p>
        </Card.Body>
      </Card>
    </>
  );
}
