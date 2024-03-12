import React, { useState } from "react";
import axios from "axios";
import "./MissionForm.css";

const MissionForm = () => {
  const [trajectoryId, setTrajectoryId] = useState("");
  const [duration, setDuration] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/missions/`, {
        trajectory_id: trajectoryId,
        duration: duration,
        priority: priority,
      });

      window.alert("Mission created successfully!");

      setTrajectoryId("");
      setDuration("");
      setPriority("");
    } catch (error) {
      console.error("Error creating mission:", error);

      window.alert("Error creating mission. Please try again.");
    }
  };

  return (
    <div className="mission-form">
      <h1>Create New Mission</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Trajectory ID:</label>
          <input
            type="text"
            value={trajectoryId}
            onChange={(e) => setTrajectoryId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Duration (min):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Priority (0-10):</label>
          <input
            type="number"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MissionForm;
