import React from "react";
import Navigation from "./components/nav/Navigation";
import Dashboard from "./components/dashboardPage/Dashboard";
import DroneList from "./components/dronePage/DroneList";
import DroneDetails from "./components/dronePage/DroneDetails";
import MissionList from "./components/missionPage/MissionList";
import MissionForm from "./components/missionPage/MissionForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/drones" element={<DroneList />} />
          <Route path="/drones/:id" element={<DroneDetails />} />
          <Route path="/missions" element={<MissionList />} />
          <Route path="/missions/add" element={<MissionForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
