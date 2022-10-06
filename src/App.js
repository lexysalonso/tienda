import "./App.css";
import LandingPages from "./Pages/LandingPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GridCard from "./components/Card/GridCard";


const Login = () => {
  return <div>Login de la App</div>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />}>
          <Route index element={<GridCard />} />
          <Route path="search" element={<GridCard />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
