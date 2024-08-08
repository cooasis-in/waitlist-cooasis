import "./App.css";
import Refer from "./components/Refer";
import ShareLinks from "./components/ShareLinks";
import { Routes, Route } from "react-router-dom";
import Waitlist from "./components/Waitlist";
import EmailVerify from "./pages/EmailVerify";
import NumberPage from "./pages/NumberPage";
import NumberVerify from "./pages/NumberVerify";
import EmailPage from "./pages/EmailPage";
import VarefiedNumber from "./pages/Varefied";
import Varefied from "./pages/Varefied";
// import Nift from "./components/Nift";
// import NiftEmailVerify from "./components/NiftEmailVerify";
// import NiftRefer from "./components/NiftRefer";

function App() {
  return (
      <Routes>
        <Route path="/" element={<EmailPage />} />
        <Route path="/verifyemail" element={<EmailVerify />} />
        <Route path="/verified" element={<Varefied />} />
        <Route path="/numberPage" element={<NumberPage />} />
        <Route path="/numberverify" element={<NumberVerify />} />
        <Route path="/share" element={<ShareLinks />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/nift" element={<EmailPage />} />
        <Route path="/nift/verifyemail" element={<EmailVerify />} />
        <Route path="/nift/verified" element={<Varefied />} />
        <Route path="/nift/numberPage" element={<NumberPage />} />
        <Route path="/nift/numberverify" element={<NumberVerify />} />
         <Route path="/nift/refer" element={<Refer />} />
      </Routes>
  );
}

export default App;
