import React from "react";
import "./App.css";

import  LandingPages  from "./Pages/LandingPages";
//import { Login } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import GridCard from "./components/Products/GridCard";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
//import Login from "./Pages/Login";
//import DetailsProducts from "./Pages/DetailsProducts";
//import FilterProducts from "./Pages/FilterProducts";
import { Suspense } from "react";

const DetailsProducts = React.lazy(() => import("./Pages/DetailsProducts"));
const FilterProducts = React.lazy(() => import("./Pages/FilterProducts"));
const Login = React.lazy(() => import("./Pages/Login"));
const ProductsGrid = React.lazy(() => import("./Pages/Products"));




function App() {
  return (
    <Router>
      <Suspense fallback={<>Caragando ......</>}>
        <Routes>
          <Route path="/" element={<LandingPages />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <ProductsGrid />
                </PrivateRoute>
              }
            />
            <Route
              path="search"
              element={
                <PrivateRoute>
                  <ProductsGrid />
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
              path="/filter/details/:id"
              element={
                <PrivateRoute>
                  <DetailsProducts />
                </PrivateRoute>
              }
            />

            <Route
              path="filter"
              element={
                <PrivateRoute>
                  <FilterProducts />
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
      </Suspense>
    </Router>
  );
}

export default App;
