import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="skills">Skills</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default About;
