import React from "react";
import Header from "./Components/Header";
import BehanceList from "./Components/BehanceList";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <div className="main relative overflow-hidden">
      <Header />
      <BehanceList />
      <Footer />
    </div>
  );
};

export default App;
