import "./App.css";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrival from "./components/NewArrival";

function App() {
  return (
    <div className="center">
      <Navbar />
      <Hero />
      <NewArrival />
      <Explore />
    </div>
  );
}

export default App;
