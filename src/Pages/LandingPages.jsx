import React from 'react'
import GridCard from '../components/Card/GridCard';
import Navbar from '../components/Navbar/Navbar';

const LandingPages = () => {
  return (
    <main>
      <header className="App">
        <Navbar></Navbar>
      </header>
      <section className="main">
        <GridCard></GridCard>
      </section>
      </main>
  );
}

export default LandingPages