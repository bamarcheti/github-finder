import classes from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
