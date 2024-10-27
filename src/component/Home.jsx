import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar"
import TaskDialog from "./auth/TaskDialog"
import axios from "axios";
import { useLocation } from "react-router-dom";

// import Createtask from "./auth/Createtask"

function Home() {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3900/task");
      setTasks(response.data); 
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, [location]);

  return (
    <div className="App">
      <Navbar/>
      <TaskDialog tasks={tasks}/>

     {/* <Createtask/> */}
    </div>
  );
}

export default Home;
