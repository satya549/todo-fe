import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar"
import TaskDialog from "./auth/TaskDialog"
import axios from "axios";
import { CREATE_TASK } from "../urls";
import { useNavigate } from "react-router-dom";

function Home() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();


  const handleAddTaskClick = () => {
    navigate("/create-task");
  };
  const getTaskData = () => {
    const config = {
      method: 'GET',
      url: CREATE_TASK
    }
    axios(config).then((res) => {
      const {success, data} = res.data
      if(success){
        setTasks(data)
      }
    })
   }
   const handleDeleteTask = (taskId) => {
     const config = {
      method: 'DELETE',
      url: `${CREATE_TASK}/${taskId}`,
      body: {ids: [taskId]}
     }
     axios(config).then((res) => {
      const {success} = res.data
      if(success){
        getTaskData()
      }
     })
   }

   const handleTaskEdit = (task) => {
     navigate('/edit-task', {state: {task}})
   }

  // const handleDeleteTask = async (taskId) => {
  //   try {
  //     await axios.delete(`${CREATE_TASK}/${taskId}`);
  //     fetchTasks();
  //   } catch (error) {
  //     console.error("Failed to delete task", error);
  //   }
  // };


   useEffect(() => {
    getTaskData()
   },[])
   
  return (
    <div className="App">
      <Navbar/>
      <TaskDialog tasks={tasks} onAdd={handleAddTaskClick} onDelete={handleDeleteTask} onEdit={handleTaskEdit}  />
    </div>
  );
}

export default Home;
