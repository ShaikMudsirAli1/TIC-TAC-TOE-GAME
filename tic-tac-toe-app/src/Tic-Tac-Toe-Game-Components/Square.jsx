import React from "react";
import PropTypes from "prop-types";

const Square = (props) => {
  // STYLE PROP TAKES OBJECT AND PROPERTIES.
  // ADDING EVENTLISTENER
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "5px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      {/* IN SQUARE WILL BE EMPTY OR IT
    CONSISTS OF X THEN !X IT CONSISTS OF 0 */}
      <h5
        style={{
          color: "red",
          borderRadius: " 5px solid black",
          fontSize: "30px",
          fontFamily: "cursive",
          // backgroundColor: "black",
        }}
      >
        {props.value}
      </h5>
    </div>
  );
};

// Prop validation
Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Square;
