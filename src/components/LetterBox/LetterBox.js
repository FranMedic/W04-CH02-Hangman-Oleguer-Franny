function LetterBox({ wrongLetters }) {
  return wrongLetters.map((letter, index) => <p key={index}>{letter}</p>);
}

export default LetterBox;
