import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import data from "./data"; // Assuming this imports an array of menu items

const App = () => {
  const [menuItems, setMenuItems] = useState(data);

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
