import React from 'react';
import { Link } from 'react-router-dom'; // Si vous utilisez react-router pour la navigation
import './SideBarA.css';
const SidebarA = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/prescriptions" className="sidebar-link">Prescriptions</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/medications" className="sidebar-link">Medications</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/patients" className="sidebar-link">Patients</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/dashboard/settings" className="sidebar-link">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarA;
