import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Dashboard</Link>
      <Link to="/drones">Drones</Link>
      <Link to="/missions">Missions</Link>
    </nav>
  );
};

export default Navigation;
