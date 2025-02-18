import "./App.css";
import Footer from "./components/Footer"; 
import Navbar from "./components/NavBar";
import Intro1 from "./components/Intro1";

function App() {
  return (
    <div id="root">
      <Navbar />
      <main>
        <Intro1 />
        <div>
       
          Intro section (about me) [One secion is about me one secion is about skill set]<br />
          Experiences<br />
          Projects<br />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
