import "bootstrap/dist/css/bootstrap.min.css";
import "./component/css/component.css";
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Index from "./component/Home.js";
import Intro from "./component/Intro.js";
function App() {
  return (
    <>
    <BrowserRouter>
    
       <Routes>
         <Route exact path="/" element={<Intro/>} />
         <Route  path="/index" element={<Index/>} />
         <Route exact path="/intro" element={<Intro/>} />
         {/* <Route exact path="/page-register" element={<PageRegister/>} />
         <Route exact path="/forgot-password" element={<ForgotPassword/>} />
         <Route exact path="/payments" element={<Payments/>} />
         <Route exact path="/profile" element={<Profile/>} />
         <Route exact path="/project" element={<Project/>} />
         <Route exact path="/inspirations" element={<Inspirations/>} />  */}
         
        
       </Routes>
      
     </BrowserRouter>
    </>
  );
}

export default App;
