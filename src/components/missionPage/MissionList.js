import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MissionList.css';

const MissionList = () => {
  const [missions, setMissions] = useState([]);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/missions/add');
  };

  useEffect(() => {
    axios.get('http://localhost:8000/missions/').then((response) => {
      setMissions(response.data);
    });
  }, []);

  return (
    <div className="mission-list">
      <h1>Missions</h1>
      <button onClick={handleButtonClick}>Open Mission Form</button>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id} className="mission-item">
            {mission.id} - Trajectory: {mission.trajectory_id} - Duration: {mission.duration} min - Priority: {mission.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionList;