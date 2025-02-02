import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome/welcome";
import Intro from "./components/intro/intro";
import Home from "./components/home/home";
import Letter from "./components/letter/letter";
import Quiz from "./components/quiz/quiz";
import Cert from "./components/cert/cert"

function App() {
  return (
    <center><div className="home">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/why_i_made_this😠" element={<Intro /> }></Route>
          <Route path="/custie_hai_baby_tu😘" element={<Letter />}></Route>
          <Route path="/i_love_you_so_much💗" element={<Home />}></Route>
          <Route path="/jawab_degi_toh_certificate_dunga😘" element={<Quiz />}></Route>
          <Route path="/best_gf💗💗💗💗" element={<Cert />}></Route>
        </Routes>
      </BrowserRouter>
    </div></center> 
  );
}

export default App;
