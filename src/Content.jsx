import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsShow } from "./PlantsShow";
import { SchedulesIndex } from "./SchedulesIndex";
import { SchedulesShow } from "./SchedulesShow";
import { SchedulesNew } from "./SchedulesNew";
import { Modal } from "./Modal";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [schedules, setSchedules] = useState([]);

  const [isPlantsShowVisible, setIsPlantsShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});

  const [isSchedulesShowVisible, setIsSchedulesShowVisible] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState({});

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

  const handleShowSchedule = (schedule) => {
    console.log("handleShowSchedule", schedule);
    setIsSchedulesShowVisible(true);
    setCurrentSchedule(schedule);
  };

  const handleCreateSchedule = (params, successCallback) => {
    console.log("handleCreateSchedule", params);
    axios.post("http://localhost:3000/schedules.json", params).then((response) => {
      setSchedules([...schedules, response.data]);
      successCallback();
    });
  };

  const handlePlantClose = () => {
    console.log("handlePlantClose");
    setIsPlantsShowVisible(false);
  };

  const handleScheduleClose = () => {
    console.log("handleScheduleClose");
    setIsSchedulesShowVisible(false);
  };

  useEffect(handleIndexPlants, []);

  useEffect(handleIndexSchedules, []);

  return (
    <div>
      <Routes>
        <Route path="/plants" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
        <Route path="/" element={<SchedulesIndex schedules={schedules} onshowSchedule={handleShowSchedule} />} />
        <Route path="/schedules/new" element={<SchedulesNew onCreateSchedule={handleCreateSchedule} />} />
      </Routes>

      <Modal show={isPlantsShowVisible} onClose={handlePlantClose}>
        <PlantsShow plant={currentPlant} />
      </Modal>
      <Modal show={isSchedulesShowVisible} onClose={handleScheduleClose}>
        <SchedulesShow schedule={currentSchedule} />
      </Modal>
    </div>
  );
}
