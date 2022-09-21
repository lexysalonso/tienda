import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import {Outlet} from "react-router-dom"




const LNavbar1 = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "thin solid red",
        borderBottom: "thin solid black",
        padding: "1rem",
        position: "fixed",
        top: "4rem",
      }}
    >
      Navbar1
    </div>
  );
}




const LandingPages = () => {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <LNavbar1 ></LNavbar1>
      </header>
      <section className="main">
        <Outlet />
      </section>
    </main>
  );
}

export default LandingPages