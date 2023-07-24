import "bootstrap/dist/css/bootstrap.min.css";
import "./component/css/component.css";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import Service from "./component/Service";
import Budget from "./component/Budget";
import DesignInspiration from "./component/DesignInspiration";
import Slider from "./component/Slider.js";
import InteriorDesign from "./component/InteriorDesign";
import LoveSpcae from "./component/LoveSpace";
import CoordinatePeople from "./component/CoordinatePeople";
import MoodboardPopup from "./component/MoodboardPopup.js";
import Intro from "./component/Intro.js";

function App() {
  return (
    <>
      {/* <Intro/> */}
      <Header />
      <Slider />
      {/* <MoodboardPopup /> */}
      <InteriorDesign />
      <LoveSpcae />
      <CoordinatePeople />
      <DesignInspiration />
      <Service />
      <Budget />
      <Footer />
    </>
  );
}

export default App;
