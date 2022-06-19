import React, { useState } from "react";

function PlantCard({ plant }) {
  // const { name, image, price } = plant
  const [button, setButton] = useState(true)

  function handleClick() {
    setButton((button) => !button)
  }

  const color = button ? "green" : "red"

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {/* {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )} */}
      <button className="primary" style={{ background: color }} onClick={handleClick}>{button ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;
