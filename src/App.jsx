import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Touch from "./components/Touch";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      {/* <Navbar />
      <Header />
      <About />
      <Services />
      <Latest />
      <Touch />
      <Skills />
      <Timeline />
      <Footer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
