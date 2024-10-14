import Navbar from "./shared/Navbar"
import TaskDialog from "./auth/TaskDialog"

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <TaskDialog/>
    </div>
  );
}

export default Home;
