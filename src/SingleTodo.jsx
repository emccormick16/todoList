import React, { useState } from "react";
import PropTypes from "prop-types";

const uncompletedStyle = {
  color: "red",
  fontWeight: "bold",
};

const completedStyle = {
  textDecoration: "line-through",
  opacity: 0.25,
  fontStyle: "italic",
};

const SingleTodo = ({ todoName }) => {
  const [completed, setCompleted] = useState(false);
  const toggleTask = () => {
    setCompleted(!completed);
  };
  return (
    <div style={completed ? completedStyle : uncompletedStyle}>
      <input type="checkbox" onClick={toggleTask} />
      {todoName}
    </div>
  );
};

SingleTodo.propTypes = {
  todoName: PropTypes.string,
};

export default SingleTodo;
