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
        <section id="home"> <Intro1 /> </section>
        <section id="about"> <About /> </section>
        <section id="experience"> <Experience /> </section>
        <section id="projects"> <Projects /> </section>
      </main>
      <Footer />
    </div>
  );
}
export default App;
