import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import data from "./data"; // Assuming this imports an array of menu items
import Categories from "./Categories";

// Fix: Use data instead of menu as the variable doesn't exist
// const tempCategory = data.map((item) => item.category);
// const tempSet = new Set(tempCategory);
// const tempItems = ["all", ...tempSet];
// console.log(tempCategory);

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
