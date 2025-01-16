import { useState } from "react"; 
import { Layout } from "./components/Layout";
import { Herosection } from "./components/Herosection";
import { Button } from "@/components/ui/button"
import { GameRules } from "./components/Gamerules";
function App() {
  const [count, setCount] = useState(0);

  return (
    
      <Layout>

        <Herosection/>
        <GameRules/>
        {/* <Button className={" " } variant="outline">Click me  </Button> */}
      </Layout>
   
  );
}

export default App;
