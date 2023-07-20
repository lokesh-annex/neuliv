import "bootstrap/dist/css/bootstrap.min.css";
import "./component/css/component.css";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import Service from "./component/Service";
import Budget from "./component/Budget";
import DesignInspiration from "./component/DesignInspiration";
function App() {
  return (
    <>
      <Header />
      <DesignInspiration />
      <Service />
      <Budget />
      <Footer />
    </>
  );
}

export default App;
