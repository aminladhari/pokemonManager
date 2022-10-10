import "./App.css";
import Home from "./Home";
import AddPokemon from "./AddPokemon";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<AddPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
