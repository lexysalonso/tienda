import logo from "./logo.svg";
import "./App.css";
import { useGetPdroductsQuery } from "./features/Products/productSlice";


function App() {
  const { data: prodcuts, isError ,isFetching } = useGetPdroductsQuery();
  console.log("ver producst", prodcuts ?? []);

  if (isFetching) {
    return <div>Cargando ...</div>;
  }
  if(isError) return <div><p>Hubo un error</p></div>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React lmdiaz manuel diaz Alonsosdsd
        </a>
        <ul>
          {prodcuts.data.map((p) => (
            <>
              <li style={{ "list-style": "none", marginBottom: "2rem" }}>
                {p.email}
              </li>
              <img src={p.avatar} alt="asdfdf" />
            </>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
