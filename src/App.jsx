import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Herosection } from "./components/Herosection";
import { Button } from "@/components/ui/button";
import { GameRules } from "./components/Gamerules";
import { RoomSection } from "./components/Roomsection";
import { ChallengeSection } from "./components/Chalangeyourself";
import { GameInterface } from "./components/Gameinterface";
import Questionset from "./components/Questionset";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Herosection />} />

          {/* <ChallengeSection/>  */}

          <Route path="/solochalleng" element={<Questionset />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
