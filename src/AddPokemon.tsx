import React, { useState, useEffect } from "react";
var _data = require("./db.json");
export const AddPokemon = (): JSX.Element => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [taille, setTaille] = useState("");
  const [poid, setPoid] = useState("");
  const [type, setType] = useState("");

  let newPokemon = {
    name: name,
    description: description,
    image: image,
    taille: taille,
    poid: poid,
    type: type,
  };

  return (
    <div>
      <h1>Nouveau Pokémon</h1>
      <form>
        <div>
          <label>Nom</label>
          <input
            type="text"
            onChange={(e: any) => {
              setData(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            onChange={(e: any) => {
              setData(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            onChange={(e: any) => {
              setData(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Taille</label>
          <input
            type="text"
            onChange={(e: any) => {
              setData(e.target.value);
            }}
          />{" "}
          cm
        </div>
        <div>
          <label>Poids</label>
          <input
            type="text"
            onChange={(e: any) => {
              setData(e.target.value);
            }}
          />
          kg
        </div>
        <div>
          <label>Type</label>
          <input type="radio" name="type" /> Feu
          <input type="radio" name="type" /> Glace
          <input type="radio" name="type" /> Électricité
          <input type="radio" name="type" /> Vent
        </div>
        <button>Enregistrer</button>
      </form>
    </div>
  );
};

export default AddPokemon;
