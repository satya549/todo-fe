import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { CREATE_TASK } from "../../urls";
import axios from "axios";


// const tasks = [
//   {
//     id: "task_1",
//     title: "Buy Milk",
//     description: "Buy milk from the grocery store",
//     priority: "High",
//     dueDate: "2024-10-20T10:30:00.000Z",
//   },
//   {
//     id: "task_2",
//     title: "Finish React Component",
//     description: "Complete the new component for the project",
//     priority: "Middle",
//     dueDate: "2024-10-21T09:00:00.000Z",
//   },
// ];

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "error";
    case "Low":
      return "success";
    case "Middle":
      return "warning";
    default:
      return "default";
  }
};

const TaskDialog = ({ tasks = [], fetchTasks }) => {
 //const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${CREATE_TASK}/${taskId}`);
      fetchTasks();
       //setTasks(tasks.filter(task => task.id !== taskId));  
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  const handleAddTaskClick = () => {
    navigate("/create-task");
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*(Array.isArray(tasks) ? tasks : [])*/ Array.isArray(tasks) && tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              {/*<TableCell>{task.priority}</TableCell>
              <TableCell>{task.dueDate}</TableCell>*/}
              <TableCell>
                <Button
                  variant="contained"
                  color={getPriorityColor(task.priority)}
                  size="small"
                >
                  {task.priority} priority
                </Button>
              </TableCell>
              <TableCell>{new Date(task.dueDate).toLocaleString()}</TableCell>
              <TableCell align="center">
                <IconButton color="success">
                  <CheckIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteTask(task.id)}  > 
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ padding: 16, display: "flex", justifyContent: "flex-end" }}>
        <Button color="inherit">CANCEL</Button>
        <Button variant="contained" color="primary" style={{ marginLeft: 8 }} onClick={handleAddTaskClick}>
          ADD TASK
        </Button>
      </div>
    </TableContainer>
  );
};

export default TaskDialog;
