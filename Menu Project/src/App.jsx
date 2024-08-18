import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import data from "./data"; // Assuming this imports an array of menu items
import Categories from "./Categories";

// Create a list of all categories including "all"
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }

    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
