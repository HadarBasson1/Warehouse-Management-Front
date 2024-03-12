import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './DroneList.css';

const DroneList = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/drones/').then((response) => {
      setDrones(response.data);
    });
  }, []);

  return (
    <div className="drone-list">
      <h1 className='drone-list-title'>Drones</h1>
      <table className="drone-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {drones.map((drone) => (
            <tr key={drone.id} className="drone-item">
              <td>{drone.id}</td>
              <td>{drone.name}</td>
              <td>{drone.status}</td>
              <td>
                <Link to={`/drones/${drone.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DroneList;
