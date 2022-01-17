import PropTypes from "prop-types";

const Button = ({ color, text, textColor, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
