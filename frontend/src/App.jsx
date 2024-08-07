import "./App.css";
import Refer from "./components/Refer";
import ShareLinks from "./components/ShareLinks";
import { Routes, Route } from "react-router-dom";
import Waitlist from "./components/Waitlist";
import EmailVerify from "./pages/EmailVerify";
import NumberPage from "./pages/NumberPage";
import NumberVerify from "./pages/NumberVerify";
import EmailPage from "./pages/EmailPage";
// import Nift from "./components/Nift";
// import NiftEmailVerify from "./components/NiftEmailVerify";
// import NiftRefer from "./components/NiftRefer";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<NumberPage />} />
        <Route path="/numberverify" element={<NumberVerify />} />
        <Route path="/emailgpage" element={<EmailPage />} />
        <Route path="/share" element={<ShareLinks />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/verifyemail" element={<EmailVerify />} />
        {/* <Route path="/nift" element={<Nift />} />
        <Route path="/nift/verifyemail" element={<NiftEmailVerify />} />
        <Route path="/nift/refer" element={<NiftRefer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
