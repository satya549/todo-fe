import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";



const tasks  =  [
  {
    id: 1,
    member: "Alice Mayer",
    avatar: "https://i.pravatar.cc/150?img=1",
    task: "Call Sam For payments",
    priority: "High",
  },
  {
    id: 2,
    member: "Kate Moss",
    avatar: "https://i.pravatar.cc/150?img=2",
    task: "Make payment to Bluedart",
    priority: "Low",
  },
  {
    id: 3,
    member: "Danny McChain",
    avatar: "https://i.pravatar.cc/150?img=3",
    task: "Office rent",
    priority: "Middle",
  },
  {
    id: 4,
    member: "Alexa Chung",
    avatar: "https://i.pravatar.cc/150?img=4",
    task: "Office grocery shopping",
    priority: "High",
  },
];

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

const TaskDialog = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Team Member</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={task.avatar} alt={task.member} />
                  <span style={{ marginLeft: 10 }}>{task.member}</span>
                </div>
              </TableCell>
              <TableCell>{task.task}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color={getPriorityColor(task.priority)}
                  size="small"
                >
                  {task.priority} priority
                </Button>
              </TableCell>
              <TableCell align="center">
                <IconButton color="success">
                  <CheckIcon />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ padding: 16, display: "flex", justifyContent: "flex-end" }}>
        <Button color="inherit">CANCEL</Button>
        <Button variant="contained" color="primary" style={{ marginLeft: 8 }}>
          ADD TASK
        </Button>
      </div>
    </TableContainer>
  );
};

export default TaskDialog;