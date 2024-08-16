import React from "react";
import Tour from "./Tour"; // Importing the individual Tour component

const Tours = ({ tours, removeTour }) => {
  // Changed removeTours to removeTour
  if (tours.length === 0) {
    return (
      <section>
        <div className="title">
          <h2>No Tours Available</h2>
          <div className="title-underline"></div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours; // Exporting the correct component
