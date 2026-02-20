import React from 'react';
 import { jsxDEV } from "react/jsx-dev-runtime";
import "./index.css";
import ReactDom from 'react-dom';
import Navbar from "./components/navbar.jsx";
import { Stats , Hero} from './components/hero.jsx';  




function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}

export default App;
