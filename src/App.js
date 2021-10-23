import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Router>
        <HomePage exact path="/" />
      </Router>
    </div>
  );
}

export default App;
