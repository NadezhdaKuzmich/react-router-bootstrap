import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyRoutes from "./Pages/MyRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MyRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;