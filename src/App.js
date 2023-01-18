import "./App.css";
import Featured from "./Components/Featured";
import Highlights from "./Components/Highlights";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav.jsx";
import Discounted from "./Components/Discounted";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
