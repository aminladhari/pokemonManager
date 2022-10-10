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
    
    const addType = (type:string) => {
        setType(type)        
   }

  return (
    <div>
      <h1>Nouveau Pokémon</h1>
      <form>
        <div>
          <label>Nom</label>
          <input
            type="text"
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            onChange={(e: any) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            onChange={(e: any) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Taille</label>
          <input
            type="text"
            onChange={(e: any) => {
              setTaille(e.target.value);
            }}
          />{" "}
          cm
        </div>
        <div>
          <label>Poids</label>
          <input
            type="text"
            onChange={(e: any) => {
              setPoid(e.target.value);
            }}
          />
          kg
        </div>
        <div>
          <label>Type</label>
                  <button onClick={() => { addType("feu") }}>Feu</button>
                  <button onClick={() => { addType("Glace") }}>Glace</button>
                  <button onClick={() => { addType("Electricité") }}>Électricité</button>
                  <button onClick={() => { addType("Vent") }}>Vent</button>
        </div>
        <button>Enregistrer</button>
      </form>
    </div>
  );
};

export default AddPokemon;
