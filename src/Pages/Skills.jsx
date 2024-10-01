import React from "react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Skills</h1>
      <button onClick={handleSubmit}>Home Page</button>
    </div>
  );
};

export default Skills;
