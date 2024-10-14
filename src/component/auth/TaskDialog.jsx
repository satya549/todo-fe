import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';

const TaskDialog = () => {
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Task Data:', taskData);

    handleClose();  
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Task
      </Button>
      <Dialog open={open} onClose={handleClose} PaperProps={{
          style: {
            width: '600px', 
            height: '400px', 
            maxWidth: '100%', 
          },
        }}>
        <DialogTitle>Create a New Task</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
            }}
          >
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              name="title"
              value={taskData.title}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={taskData.description}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions style={{height: '10vh'}}>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskDialog;