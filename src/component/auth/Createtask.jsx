import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Avatar,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

// Sample data
const tasksData = [
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

// Utility function for priority color
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

const CreateTask = () => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState(tasksData);
  const [newTask, setNewTask] = useState({
    member: "",
    task: "",
    priority: "Low",
    avatar: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setNewTask({ member: "", task: "", priority: "Low", avatar: "" });
    handleClose();
  };

  return (
    <div>
      {/* Task List Table */}
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
          <Button variant="contained" color="primary" style={{ marginLeft: 8 }} onClick={handleOpen}>
            ADD TASK
          </Button>
        </div>
      </TableContainer>

      {/* Add Task Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Team Member"
            value={newTask.member}
            onChange={(e) => setNewTask({ ...newTask, member: e.target.value })}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Task"
            value={newTask.task}
            onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
            margin="dense"
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Priority</InputLabel>
            <Select
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Middle">Middle</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">Cancel</Button>
          <Button onClick={handleAddTask} variant="contained" color="primary">
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateTask;
