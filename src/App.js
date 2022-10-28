import "./App.css";
import LandingPages from "./Pages/LandingPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GridCard from "./components/Products/GridCard";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Login from "./Pages/Login";
import DetailsProducts from "./Pages/DetailsProducts";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />}>
          <Route
            index
            element={
              <PrivateRoute>
                <GridCard />
              </PrivateRoute>
            }
          />
          <Route
            path="search"
            element={
              <PrivateRoute>
                <GridCard />
              </PrivateRoute>
            }
          />
          <Route
            path="/search/details/:id"
            element={
              <PrivateRoute>
                <DetailsProducts />
              </PrivateRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <PrivateRoute>
                <DetailsProducts />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
