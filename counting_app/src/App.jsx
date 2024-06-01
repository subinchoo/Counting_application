import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  return (
    <div className="App">
      <h1>simple counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
