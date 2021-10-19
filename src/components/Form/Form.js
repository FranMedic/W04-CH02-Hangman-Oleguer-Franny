import PropTypes from "prop-types";
const Form = ({ buttonText, actionOnClick }) => {
  return (
    <>
      <form onSubmit={actionOnClick}>
        <input
          type="text"
          className="form-letter"
          maxLength="1"
          minLength="1"
        />
        <input type="submit" value={buttonText} className="submit" />
      </form>
    </>
  );
};

Form.propTypes = {
  buttonText: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Form;
