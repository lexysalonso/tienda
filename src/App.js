import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <header className="App">
        <Navbar></Navbar>
      </header>
      <main className="main">
        <Card></Card>
      </main>
     
    </>
  );
}

export default App;
