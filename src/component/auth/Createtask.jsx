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
import { useLocation, useNavigate } from "react-router-dom";
import {CREATE_TASK} from '../../urls';

const priorities = ["High", "Middle", "Low"];
 const initTask = {
  title: "",
  description: "",
  priority: "",
  dueDate: "",
}
const TaskForm = () => {
  const {pathname, state} = useLocation()
  const {task = initTask} = state || {}
  const [taskData, setTaskData] = useState(task);
  console.log({pathname});
  
  const navigate = useNavigate();
  console.log({task});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const config = {
      method: pathname==='/create-task' ? 'POST' : 'PUT',
      url: pathname==='/create-task' ? CREATE_TASK : `${CREATE_TASK}/${taskData?._id}`,
      data: taskData
    }
    axios(config).then((res) => {
      const {success} = res.data
      if(success){
        navigate('/')
      }
    })
    
  //   try {
  //     const response = await axios.post(CREATE_TASK, taskData)
  //     console.log(response.data)
  //     navigate("/");
      
  //   } catch (error) {
  //     console.log( error.response?.data || error.message)
  // };
};

const goBack = () =>{
navigate(-1)
}


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
              autoComplete="off"
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
              autoComplete="off"
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
            <Button variant="outlined" color="inherit" style={{ marginRight: 8 }} onClick={goBack}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
             { taskData._id? 'Edit Task': 'Create Task'}
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
