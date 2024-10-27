import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Paper,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Navbar from "../shared/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const priorities = ["High", "Middle", "Low"];

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3900/task/create', taskData)
      console.log('Task created successfully', response.data)
      navigate("/");
    } catch (error) {
      console.log( error.response?.data || error.message)
  };
};

  return (
    <div>
      <Navbar />
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
    <Paper style={{ padding: 16,maxWidth: 500, width: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Add New Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              fullWidth
              name="title"
              value={taskData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              name="description"
              value={taskData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Priority"
              fullWidth
              select
              name="priority"
              value={taskData.priority}
              onChange={handleChange}
              required
            >
              {priorities.map((priority) => (
                <MenuItem key={priority} value={priority}>
                  {priority}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Due Date"
              fullWidth
              type="datetime-local"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "right" }}>
            <Button variant="outlined" color="inherit" style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </Box>
    </div>
  );
};

export default TaskForm;
