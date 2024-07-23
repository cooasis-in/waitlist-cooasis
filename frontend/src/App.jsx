import "./App.css";
import LandingPage from "./components/LandingPage";
import Refer from "./components/Refer";
import ShareLinks from "./components/ShareLinks";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/share" element={<ShareLinks />} />
      <Route path="/refer" element={<Refer />} />
    </Routes>
  </div>
  );
}

export default App;
