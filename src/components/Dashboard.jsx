import React from "react";
import Content from "./Content";
import Profile from "./Profile";
import "../styles/sidebar.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Content />
      <div className="dashboard--content">
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
