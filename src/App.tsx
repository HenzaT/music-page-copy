import { useState } from 'react'
import './styling/App.css'
// import About from './components/About/About'
import Header from './components/Header/Header'
import AptistSection from './components/AptistSection/AptistSection'

// header with aptist First Swim Shamisen (ex PPF Little Moon) About
// Opens one of the above when clicked on
function App() {
  return (
    <>
      <Header />
      <div className="main">
        <AptistSection />
      </div>
      {/* <About /> */}
    </>
  )
}

export default App
