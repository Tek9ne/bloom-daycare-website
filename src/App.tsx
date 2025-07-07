import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Facilities from "./components/Facilities";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <Staff />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
