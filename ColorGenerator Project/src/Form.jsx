import React, { useState } from "react";

const Form = ({ addColor }) => {
  // Corrected props destructuring
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      addColor(color); // Call the addColor function with the input color
    }
  };

  return (
    <section className="container">
      <h4>Color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#000000"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
