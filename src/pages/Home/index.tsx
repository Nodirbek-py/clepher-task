import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-neutral-800">Hey! I am Nodirbek</h1>
      <p className="mt-4 text-xl font-thin text-neutral-700">
        If you want to check out the task, navigate to the{" "}
        <NavLink className="font-normal" to="/task">
          taskpage
        </NavLink>
        . If you want to know more about me, check this{" "}
        <a
          target="_blank"
          className="font-normal"
          href="https://docs.google.com/document/d/1aKriSWZy9AWWmN7Sq3twhKZdD9apo0RQwJU345Sjj-Y/edit?usp=sharing"
        >
          link
        </a>
      </p>
    </div>
  );
};

export default Home;
