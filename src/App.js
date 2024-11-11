import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./component/Home.jsx";
import Signup from "./component/auth/Signup.jsx"
import Login from './component/auth/Login.jsx';
import CreateTask from './component/auth/CreateTask.jsx'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path: '/create-task', 
    element: <CreateTask />,
  },
  {
    path: '/edit-task', 
    element: <CreateTask />,
  },
])

function App() {

  return (
    <div>
    <RouterProvider router={appRouter}>
    </RouterProvider>
  </div>
    
  );
}

export default App
