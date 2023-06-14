import React from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">€ {price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button className="btn" onClick={() => removeTour(id)}>
          Remove Tour
        </button>
      </div>
    </article>
  );
};

export default Tour;
