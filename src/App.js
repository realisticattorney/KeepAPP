import "./scss/style.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
    <div className="index">
    <div id="main">
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <CallToAction/>
      <Footer/>
    </div>
    </div>
  </>);
}

export default App;
