import "./App.css";
import Navbar from "./components/navbar";
import ImageCard from "./components/imageCard";
import DropDown from "./components/DropDown";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DropDown />
      <ImageCard />
      <Footer />
    </div>
  );
}

export default App;
