import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };
  useEffect(()=>{
    getDashboardData()
  },[])
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};
export default Dashboard;
