import React from 'react';
 import { jsxDEV } from "react/jsx-dev-runtime";
import "./index.css";
import ReactDom from 'react-dom';
import Navbar from "./components/navbar.jsx";
import { Stats , Hero} from './components/hero.jsx';  
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';



function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />

    </div>
  );
}

export default App;
