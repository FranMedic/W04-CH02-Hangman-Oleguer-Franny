import "./App.css";
import GuessedWord from "./components/GuessedWord/GuessedWord";
import { useState } from "react";

function App() {
  const [word, setWord] = useState([
    { letter: "h", guessed: true },
    { letter: "o", guessed: false },
    { letter: "l", guessed: true },
    { letter: "a", guessed: true },
  ]);

  const patata = () => {
    console.log("Eztoy biba");
  };
  return (
    <>
      <Form text="Enviar" actionOnClick={patata} />
      <div className="word">
        <ul className="word__list">
          {word.map((letter) => (
            <GuessedWord letter={letter.letter} guessed={letter.guessed} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
