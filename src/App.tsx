import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import type { ReleaseData } from './data/discographyData';
import { animated, useTransition } from 'react-spring';

import Header from './components/Header/Header';
import Section from './components/Sections/Section';
import ScrollToTop from './components/ScrollToTop';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import ContactForm from './components/ContactForm/ContactForm';
import './styling/App.css'
import { aptistReleases } from './data/discographyData';

export default function App() {
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
            element={ArtistSection('aptist', 'aptist', 'aptist-section', aptistReleases, 0, 0)} />
          <Route path="about" element={<AboutSection />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="*"
            element={ArtistSection('aptist', 'aptist', 'aptist-section', aptistReleases, 0, 0)} />
        </Routes>
      </animated.div>
    ));
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <RouteTransition />
    </BrowserRouter>
  )
}
