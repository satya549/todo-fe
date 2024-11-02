import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar"
import TaskDialog from "./auth/TaskDialog"
import axios from "axios";
import { useLocation } from "react-router-dom";
import { CREATE_TASK } from "../urls";

function Home() {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();

  const fetchTasks = async () => {
    try {
      const response = await axios.get(CREATE_TASK);
      setTasks(Array.isArray(response.data) ? response.data : []);
      //setTasks(response.data); 
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [location]);

  return (
    <div className="App">
      <Navbar/>
      <TaskDialog tasks = {tasks} fetchTasks = {fetchTasks} />

    </div>
  );
}

export default Home;
