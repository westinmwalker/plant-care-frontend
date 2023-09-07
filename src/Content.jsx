import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsShow } from "./PlantsShow";
import { SchedulesIndex } from "./ScheduleIndex";
import { Modal } from "./Modal";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [schedules, setSchedules] = useState([]);
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

  const handleIndexSchedules = () => {
    console.log("handleIndexSchedules");
    axios.get("http://localhost:3000/schedules.json").then((response) => {
      console.log(response.data);
      setSchedules(response.data);
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPlantsShowVisible(false);
  };

  useEffect(handleIndexPlants, []);

  useEffect(handleIndexSchedules, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
        <Route path="/schedules" element={<SchedulesIndex schedules={schedules} />} />
      </Routes>

      <Modal show={isPlantsShowVisible} onClose={handleClose}>
        <PlantsShow plant={currentPlant} />
      </Modal>
    </div>
  );
}
