// import React, { useState } from 'react';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';

// const TaskDialog = () => {
//   const [open, setOpen] = useState(false);
//   const [taskData, setTaskData] = useState({
//     title: '',
//     description: '',
//   });

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (e) => {
//     setTaskData({
//       ...taskData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log('Task Data:', taskData);

//     handleClose();  
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//       <Button variant="contained" color="primary" onClick={handleClickOpen}>
//         Create Task
//       </Button>
//       <Dialog open={open} onClose={handleClose} PaperProps={{
//           style: {
//             width: '600px', 
//             height: '400px', 
//             maxWidth: '100%', 
//           },
//         }}>
//         <DialogTitle>Create a New Task</DialogTitle>
//         <DialogContent>
//           <Box
//             component="form"
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 2,
//               width: '100%',
//             }}
//           >
//             <TextField
//               label="Title"
//               variant="outlined"
//               fullWidth
//               name="title"
//               value={taskData.title}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Description"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               name="description"
//               value={taskData.description}
//               onChange={handleChange}
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions style={{height: '10vh'}}>
//           <Button onClick={handleClose} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmit} color="primary">
//             Create
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default TaskDialog;




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