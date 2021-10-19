import PropTypes from "prop-types";

const GuessedWord = ({ letter, guessed }) => {
  return <li>{guessed && letter}</li>;
};
GuessedWord.propTypes = {
  letter: PropTypes.string.isRequired,
  guessed: PropTypes.bool.isRequired,
};

export default GuessedWord;
