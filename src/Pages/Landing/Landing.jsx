import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";

const Landing = (props) => {
  return (
    <div className="landing">
      <Header/>
      <Contact/>
      <Skills/>
      <Projects/>
      <About/>
    </div>
  );
}

export default Landing;