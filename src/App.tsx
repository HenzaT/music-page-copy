import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styling/App.css'
// import About from './components/About/About'
import Header from './components/Header/Header'
import AptistSection from './components/AptistSection/AptistSection'

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
      <div className="main">
        <AptistSection />
      </div>
      {/* <About /> */}
    </BrowserRouter>
  )
}

export default App
