import { useState } from "react";
import "./App.css";
import GuessedWord from "./components/GuessedWord/GuessedWord";
import Form from "./components/Form/Form";
import HangmanPicture from "./components/HangmanPicture/HangmanPicture";
import LetterBox from "./components/LetterBox/LetterBox";

function App() {
  const [wrongLetters, setWrongLetters] = useState([]);
  const linesSVG = [
    <line key="1" className="stage1" x1="16" y1="80" x2="32" y2="80"></line>,
    <line key="2" className="stage2" x1="24" y1="80" x2="24" y2="16"></line>,
    <line key="3" className="stage3" x1="21" y1="16" x2="60" y2="16"></line>,
    <line key="4" className="stage4" x1="24" y1="24" x2="32" y2="16"></line>,
    <line key="5" className="stage5" x1="56" y1="16" x2="56" y2="28"></line>,
    <circle
      key="6"
      className="stage6"
      cx="56"
      cy="34"
      r="6"
      fill="#bee5eb"
    ></circle>,
    <line key="7" className="stage7" x1="56" y1="40" x2="56" y2="56"></line>,
    <line key="8" className="stage8" x1="44" y1="46" x2="56" y2="40"></line>,
    <line key="9" className="stage9" x1="68" y1="46" x2="56" y2="40"></line>,
    <line key="10" className="stage10" x1="50" y1="70" x2="56" y2="56"></line>,
    <line key="11" className="stage11" x1="62" y1="70" x2="56" y2="56"></line>,
  ];

  const currentWord = "PAQUITO";

  const [word, setWord] = useState(
    currentWord.split("").map((letter) => ({ letter, guessed: false }))
  );

  const modCurrentWord = (formLetter) => {
    setWord(
      word.map((letterObj) =>
        letterObj.letter === formLetter
          ? { ...letterObj, guessed: true }
          : { ...letterObj }
      )
    );
  };

  const getValueFromForm = (event) => {
    event.preventDefault();

    const letterValue = document.querySelector(".form-letter").value;

    if (currentWord.includes(letterValue)) {
      modCurrentWord(letterValue);
    } else {
      setWrongLetters(wrongLetters.concat([letterValue]));
    }
  };

  return (
    <>
      <div className="svg">
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <HangmanPicture
            linesSVG={linesSVG}
            numberWrongLetters={wrongLetters.length}
          />
        </svg>
      </div>
      <div className="form">
        <Form
          buttonText="Adivinar"
          actionOnClick={(event) => getValueFromForm(event)}
        />
      </div>

      <div className="wrong-letters">
        <LetterBox wrongLetters={wrongLetters} />
      </div>

      <div className="word">
        <ul className="word__list">
          {word.map((letter, index) => (
            <GuessedWord
              key={index}
              letter={letter.letter}
              guessed={letter.guessed}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
