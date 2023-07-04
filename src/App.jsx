import { Fragment } from "react";
import "./App.css";
import { Card } from "./components/Card.component";
import Carousel from './components/Carousel.component'
import Footer from "./components/Footer.component";
import { Navbar } from "./components/Navbar.component";

function App() {
  return (
    <Fragment >
      <Navbar/>
      <main className="h-full overflow-x-auto p-5">
        <Carousel images={[]}/>
        <div className="flex flex-wrap overflow-x-auto justify-around">
          {/* here goes Card component */}
          {/* {xyz.map(el=>{
            return (<Card .../>)
          })} */}
        </div>
      </main>
        <Footer/>
    </Fragment>
  );
}

export default App;
