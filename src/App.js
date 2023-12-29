import "./App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Procedure from "./components/Procedure";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Procedure />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
