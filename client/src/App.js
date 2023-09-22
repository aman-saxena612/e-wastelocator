//import logo from './logo.svg';
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import ImageUpload from "./screen/ImageUpload";
import Geolocation from "./screen/Geolocation";
import Benefits from "./components/Benefits";
import Initiatives from "./components/Initiatives";
import HomePage from "./components/HomePage";
import { useRoutes } from "react-router-dom";
import Mapp from "./Mapp";

function App() {
  // const routes=useRoutes();
  // console.log(routes);

  return (
    <BrowserRouter>
      <div
        className="d-flex flex-column"
        style={{ height: "100vh", maxHeight: "100vh", width: "100vw" }}
      >
        <TopBar />
        <NavBar />
        <div className="" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/features" element={<HomePage />} exact />
            <Route path="/signup" element={<SignUp />} exact />
            <Route path="/about" element={<Benefits />} exact />
            <Route path="/contact" element={<Initiatives />} exact />
            {/* <Route path="/contact" element={<Initiatives />} exact /> */}
            <Route path="/imageupload" element={<ImageUpload />} exact />
            <Route path="/geolocation" element={<Geolocation />} exact />
          </Routes>
          <Mapp />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
