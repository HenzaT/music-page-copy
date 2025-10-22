import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import type { ReleaseData } from './data/discographyData';
import { animated, useTransition } from 'react-spring';

import Header from './components/Header/Header';
import Overlay from './components/Header/Overlay';
import Section from './components/Sections/Section';
import ScrollToTop from './components/ScrollToTop';
import FirstSwimSection from './components/Sections/FirstSwimSection/FirstSwimSection';
import ShamisenSection from './components/Sections/ShamisenSection/ShamisenSection';
// import ContactForm from './components/Sections/ContactForm/ContactForm';
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


    const transitions = useTransition(location, {
      key: (loc: Location) => loc.pathname,
      from: {opacity: 0, width: '0%'},
      enter: {opacity: 1, width: '100%'},
      leave: {opacity: 0, width: '0%'}
    });

    const ArtistSection = (name: string, artistClass: string, sectionClass: string, release: ReleaseData[], aboutIndex: number, linksIndex: number) => (
      <Section
        artistName={name}
        artistClassName={artistClass}
        sectionClassName={sectionClass}
        artistDiscog={release}
        aboutDataIndex={aboutIndex}
        linksDataIndex={linksIndex}
      />
    );

    return transitions((style, item) => (
      <animated.div style={style}>
        <Routes location={item}>
          <Route path="aptist"
            element={ArtistSection('aptist', 'aptist', 'aptist-section', aptistReleases, 0, 0)}/>
          <Route path="first-swim"
            element={<FirstSwimSection />}/>
          <Route path="shamisen"
            element={<ShamisenSection />}/>
          <Route path="paulo-post-future"
            element={ArtistSection('Paulo Post Future', 'ppf', 'ppf-section', ppfReleases, 2, 1)}/>
          <Route path="little-moon"
            element={ArtistSection('Little Moon', 'little-moon', 'little-moon-section', littleMoonReleases, 3, 2)}/>
          {/* <Route path="contact" element={<ContactForm />} /> */}
          <Route path="about" element={<AboutSection />} />
          <Route path="*"
            element={ArtistSection('aptist', 'aptist', 'aptist-section', aptistReleases, 0, 0)}/>
        </Routes>
      </animated.div>
    ));
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header
        showOverlay={showOverlay}
        isRotated={!isRotated}
      />
      {!isRotated &&
      <Overlay
        showOverlay={showOverlay}
      />}
      <RouteTransition />
    </BrowserRouter>
  )
}
