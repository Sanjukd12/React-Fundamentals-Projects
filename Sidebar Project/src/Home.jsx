import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModel } = useGlobalContext();
  console.log(openSidebar);

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModel} className="btn">
        Show Modal
      </button>
    </main>
  );
};

export default Home;
