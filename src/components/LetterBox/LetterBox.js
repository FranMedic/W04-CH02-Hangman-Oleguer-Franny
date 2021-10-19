import PropTypes from "prop-types";

function LetterBox({ wrongLetters }) {
  return wrongLetters.map((letter, index) => <p key={index}>{letter}</p>);
}

export default LetterBox;

LetterBox.propTypes = {
  wrongLetters: PropTypes.array,
};
