import imageRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";
import Redes from "./components/Redes";
import UncontrolledCarousel from "./components/Carousel";
import AnalogClock from "./components/AnalogClock";

function App() {
  const [characters, setCharacters] = useState(null);
  const [show, setShow] = useState(false);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <UncontrolledCarousel />
        <AnalogClock className="App-clock" />
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <> 
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>

      <footer className="App-footer">
        <button onClick={() => setShow(!show)} className="App-redes">
          {show ? "Ocultar redes" : "Mostrar redes"}
        </button>
        <div className={show ? "show-element" : null}>{show && <Redes />}</div>
      </footer>
    </div>
  );
}

export default App;
