import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar"
import TaskDialog from "./auth/TaskDialog"
import axios from "axios";
import { CREATE_TASK } from "../urls";

function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(CREATE_TASK);
      console.log("Fetched tasks:", response.data);
      setTasks(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
   
  return (
    <div className="App">
      <Navbar/>
      <TaskDialog tasks = {tasks} fetchTasks = {fetchTasks} />
    </div>
  );
}

export default Home;
