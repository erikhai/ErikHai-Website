import "./App.css";
import Footer from "./components/Footer"; 
import Navbar from "./components/NavBar";
import Intro1 from "./components/Intro1";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div id="root">
      <Navbar />
      <main>
        <Intro1 />
        <About />
        
        <div>

          Experiences<br />
          Projects<br />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
