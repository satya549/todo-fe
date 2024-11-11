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
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckIcon from "@mui/icons-material/Check";

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
const initTasks = []
const TaskDialog = ({tasks=initTasks,  onDelete, onAdd, onEdit }) => {

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
          {Array.isArray(tasks) && tasks.length > 0 ? (
            tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
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
                <IconButton color="error" onClick={() => onDelete(task._id)}  > 
                  <DeleteIcon />
                </IconButton>
                <IconButton color="error" onClick={() => onEdit(task)}  > 
                  <ModeEditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} align="center">
            No tasks available.   
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      </Table>
      <div style={{ padding: 16, display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary" style={{ marginLeft: 8 }} onClick={onAdd}>
          ADD TASK
        </Button>
      </div>
    </TableContainer>
  );
};

export default TaskDialog;
