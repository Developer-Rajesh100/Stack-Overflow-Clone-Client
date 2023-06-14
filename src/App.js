import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
