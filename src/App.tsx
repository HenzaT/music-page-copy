import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Overlay from './components/Header/Overlay';
import AptistSection from './components/Sections/AptistSection/AptistSection';
import FirstSwimSection from './components/Sections/FirstSwimSection/FirstSwimSection';
import ShamisenSection from './components/Sections/ShamisenSection/ShamisenSection';
import PpfSection from './components/Sections/PPFSection/PpfSection';
import LittleMoonSection from './components/Sections/LittleMoonSection/LittleMoonSection';
import ContactForm from './components/Sections/ContactForm/ContactForm';
import AboutSection from './components/Sections/AboutSection/AboutSection';

import './styling/App.css'

// header with aptist First Swim Shamisen (ex PPF Little Moon) About
// Opens one of the above when clicked on
function App() {
  const [ isRotated, setIsRotated ] = useState<boolean>(false)

  function showOverlay() {
    const wholeBody = document.body.classList;
    setIsRotated(prevIsRotated => !prevIsRotated)
    if (!isRotated) {
      wholeBody.add('stop-scrolling');
    } else {
      wholeBody.remove('stop-scrolling');
    }
  }

  return (
    <BrowserRouter>
      <Header
        showOverlay={showOverlay}
        isRotated={isRotated}
      />
      {isRotated && <Overlay />}
      {/* <div className="main"> */}
      <Routes>
        <Route path="aptist" element={<AptistSection />} />
        <Route path="first-swim" element={<FirstSwimSection />} />
        <Route path="shamisen" element={<ShamisenSection />} />
        <Route path="paulo-post-future" element={<PpfSection />} />
        <Route path="little-moon" element={<LittleMoonSection />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="about" element={<AboutSection />} />
      </Routes>
      {/* </div> */}
      {/* <About /> */}
    </BrowserRouter>
  )
}

export default App;
