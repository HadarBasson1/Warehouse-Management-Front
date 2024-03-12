import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import './ScheduleItem.css';

const ScheduleItem = ({ schedule }) => {
  return (
    <div className="schedule-item">
      <span>ID: {schedule.id}</span>
      <span>Drone: {schedule.drone_id}</span>
      <span>Mission: {schedule.mission_id}</span>
      <span>Status: {schedule.status}</span>
    </div>
  );
};

const Dashboard = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/schedules/').then((response) => {
      setSchedules(response.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {schedules.map((schedule) => (
        <ScheduleItem key={schedule.id} schedule={schedule} />
      ))}
    </div>
  );
};

export default Dashboard;
