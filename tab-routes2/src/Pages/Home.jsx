import React, { useState } from "react";
import Java from "../Components/Java";
import Oops from "../Components/Oops";
import Dsa from "../Components/Dsa";

const Home = () => {
  let [page, setpage] = useState("java");
  const loadPage = (p) => {
    switch (p) {
      case "java":
        return <Java />;
      case "oops":
        return <Oops />;
      case "dsa":
        return <Dsa />;
    }
  };
  return (
    <div className="home">
      <div className="leftPanel">
        <ul>
          <li
            onClick={() => {
              setpage("java");
            }}
          >
            java
          </li>
          <li
            onClick={() => {
              setpage("oops");
            }}
          >
            oops
          </li>
          <li
            onClick={() => {
              setpage("dsa");
            }}
          >
            dsa
          </li>
        </ul>
      </div>

      <div className="rightPanel">{loadPage(page)}</div>
    </div>
  );
};

export default Home;
