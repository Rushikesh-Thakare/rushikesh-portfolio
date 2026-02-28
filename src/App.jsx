import React from 'react';
 import { jsxDEV } from "react/jsx-dev-runtime";
import { useState } from 'react';
import "./index.css";
import ReactDom from 'react-dom';
import Navbar from "./components/navbar.jsx";
import { Stats , Hero} from './components/hero.jsx';  
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Testimonials from './components/testimonials.jsx';
import Blog from './components/blogs.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';



function App() {

  const [blogPage, setBlogPage] = useState("home");
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Testimonials />

      <Blog
        mode={blogPage}
        activePost={activePost}
        onViewAll={() => setBlogPage("blog")}
        onReadPost={(post) => {
          setActivePost(post);
          setBlogPage("post");
        }}
        onBack={() => setBlogPage("home")}
        onBackToBlog={() => setBlogPage("blog")}
      />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
