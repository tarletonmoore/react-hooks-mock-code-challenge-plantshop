import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
  }, [])

  const plantsToDisplay = plants.filter((plant) => plant)

  return (
    <ul className="cards">
      {plantsToDisplay.map((plant) => (
        <PlantCard key={plant.id} plant={plant} plants={plants} setPlants={setPlants} />
      ))}
    </ul>
  );
}

export default PlantList;
