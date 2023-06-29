import "./App.css";
import Navbar from "./Components/Navbar";
import { api } from "./utils/api";

function App() {
  //cheacking is the api is working
  api();
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
