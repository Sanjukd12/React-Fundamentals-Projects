import React, { useState } from "react";

const Tour = ({ id, image, price, name, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  // console.log(info.substring(0,10));

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default Tour;
