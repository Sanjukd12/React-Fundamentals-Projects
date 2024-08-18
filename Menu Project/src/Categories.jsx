import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterItems(category)} // Fix: Changed onCanPlay to onClick
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
