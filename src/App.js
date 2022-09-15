import "./App.css";
import LandingPages from "./Pages/LandingPages";
import {BrowserRouter as Router , Routes , Route, } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
