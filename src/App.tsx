import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import AptistSection from './components/Sections/AptistSection/AptistSection'
import FirstSwimSection from './components/Sections/FirstSwimSection/FirstSwimSection'
import ShamisenSection from './components/Sections/ShamisenSection/ShamisenSection'
import PpfSection from './components/Sections/PPFSection/PpfSection'
import LittleMoonSection from './components/Sections/LittleMoonSection/LittleMoonSection'
import About from './components/About/About'

import './styling/App.css'

// header with aptist First Swim Shamisen (ex PPF Little Moon) About
// Opens one of the above when clicked on
function App() {
  const [ isRotated, setIsRotated ] = useState(true)

  function showOverlay() {

  }

  return (
    <BrowserRouter>
      <Header
        showOverlay={showOverlay}
      />
      {/* <div className="main"> */}
      <Routes>
        <Route path="aptist" element={<AptistSection />} />
        <Route path="first-swim" element={<FirstSwimSection />} />
        <Route path="shamisen" element={<ShamisenSection />} />
        <Route path="paulo-post-future" element={<PpfSection />} />
        <Route path="little-moon" element={<LittleMoonSection />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* </div> */}
      {/* <About /> */}
    </BrowserRouter>
  )
}

export default App
