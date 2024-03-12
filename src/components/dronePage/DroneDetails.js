import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DroneDetails.css';

const DroneDetails = () => {
  const { id } = useParams();
  const [drone, setDrone] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/drones/id/${id}`).then((response) => {
      setDrone(response.data);
    });
  }, [id]);

  return (
    <div className="drone-details">
      <h1>{drone.name} - Drone Details</h1>
      <p>ID: {drone.id}</p>
      <p>Status: {drone.status}</p>
      <p>Current Mission ID: {drone.current_mission_id}</p>
      <p>Possible Missions: {drone.possible_missions_ids}</p>
    </div>
  );
};

export default DroneDetails;
