import "./App.css";
import Footer from "./components/Footer"; 
import Navbar from "./components/NavBar";
import Intro1 from "./components/Intro1";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";

function App() {
  return (
    <div id="root">
      <Navbar />
      <main>
        <Intro1 />
        <About />
        <Experience />
        <Projects/>
        
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
