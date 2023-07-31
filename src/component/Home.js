import Service from "./Service.js";
import Budget from "./Budget.js";
import DesignInspiration from "./DesignInspiration.js";
import Slider from "./Slider.js";
import InteriorDesign from "./InteriorDesign.js";
import LoveSpcae from "./LoveSpace.js";
import CoordinatePeople from "./CoordinatePeople.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import MoodboardPopup from "./MoodboardPopup.js";
import Intro from "./Intro.js";

function Home() {
  return (
    <>
    <Header />
      <Slider />
      <InteriorDesign />
      <LoveSpcae />
      <CoordinatePeople />
      <DesignInspiration />
      <Service />
      <Footer />
      {/* <Budget /> */}

      {/* <MoodboardPopup/> */}
      {/* <Intro/> */}
    </>
  );
}

export default Home;
