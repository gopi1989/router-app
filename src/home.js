import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">page 1</Link>
          </li>
          <li>
            <Link to="/page2">page 2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;