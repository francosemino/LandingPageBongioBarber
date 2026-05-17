import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import MembersClub from "./components/MembersClub";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const HomePage = () => (
  <div className="bg-bongio-bg text-white font-manrope min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Team />
      <MembersClub />
      <Location />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
