import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from './components/Header/Header';
import Overlay from './components/Header/Overlay';
import Section from './components/Sections/Section';
import ScrollToTop from './components/ScrollToTop';
import FirstSwimSection from './components/Sections/FirstSwimSection/FirstSwimSection';
import ShamisenSection from './components/Sections/ShamisenSection/ShamisenSection';
import ContactForm from './components/Sections/ContactForm/ContactForm';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import './styling/App.css'

import { aptistReleases } from './data/discographyData';
import { ppfReleases } from './data/discographyData';
import { littleMoonReleases } from './data/discographyData';


export default function App() {
  const [ isRotated, setIsRotated ] = useState<boolean>(true);

  const showOverlay = () => {
    const wholeBody = document.body.classList;
    setIsRotated(prevIsRotated => !prevIsRotated)
    if (isRotated) {
      wholeBody.add('stop-scrolling');
    } else {
      wholeBody.remove('stop-scrolling');
    }
  }

  const RouteTransition = () => {
    const location = useLocation();
    const nodeRef = useRef(null);
    return (
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={500} nodeRef={nodeRef}>
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="aptist" element={
                <Section
                  artistName={'aptist'}
                  sectionClassName={'aptist-section'}
                  artistReleases={aptistReleases}
                  aboutDataIndex={0}
                  linksDataIndex={0}
                />}
              />
              <Route path="first-swim" element={<FirstSwimSection />} />
              <Route path="shamisen" element={<ShamisenSection />} />
              <Route path="paulo-post-future" element={
                <Section
                  artistName={'Paulo Post Future'}
                  sectionClassName={'ppf-section'}
                  artistReleases={ppfReleases}
                  aboutDataIndex={2}
                  linksDataIndex={2}
                />}
              />
              <Route path="little-moon" element={
                <Section
                  artistName={'Little Moon'}
                  sectionClassName={'little-moon-section'}
                  artistReleases={littleMoonReleases}
                  aboutDataIndex={3}
                  linksDataIndex={2}
                />}
              />
              <Route path="contact" element={<ContactForm />} />
              <Route path="about" element={<AboutSection />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header
        showOverlay={showOverlay}
        isRotated={!isRotated}
      />
      {!isRotated && <Overlay />}
      <RouteTransition />
    </BrowserRouter>
  )
}
