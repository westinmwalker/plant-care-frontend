import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsShow } from "./PlantsShow";
import { Modal } from "./Modal";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [isPlantsShowVisible, setIsPlantsShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get(`http://localhost:3000/plants.json`).then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  };

  const handleShowPlant = (plant) => {
    console.log("handleShowPlant", plant);
    setIsPlantsShowVisible(true);
    setCurrentPlant(plant);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPlantsShowVisible(false);
  };

  useEffect(handleIndexPlants, []);

  return (
    <div>
      <PlantsIndex plants={plants} onShowPlant={handleShowPlant} />
      <Modal show={isPlantsShowVisible} onClose={handleClose}>
        <PlantsShow plant={currentPlant} />
      </Modal>
    </div>
  );
}
