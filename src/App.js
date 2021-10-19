import "./App.css";
import LetterBox from "./components/LetterBox/LetterBox";
import { useState } from "react";

function App() {
  const [word, setWord] = useState([
    { letter: "h", guessed: true },
    { letter: "o", guessed: false },
    { letter: "l", guessed: true },
    { letter: "a", guessed: true },
  ]);
  return (
    <>
      <div class="word">
        <ul class="word__list">
          {word.map((letter) => (
            <LetterBox letter={letter.letter} guessed={letter.guessed} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
