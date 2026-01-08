import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import type { ReleaseData } from './data/discographyData';
import { animated, useTransition } from 'react-spring';
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Section from './components/Sections/Section';
import ScrollToTop from './components/ScrollToTop';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import ContactForm from './components/ContactForm/ContactForm';
import { aptistReleases } from './data/discographyData';
import './styling/App.css';

export default function App() {
  const [ showContent, setShowContent ] = useState<boolean>(false);

  const RouteTransition = () => {
    const location = useLocation();

    const transitions = useTransition(location, {
      key: (loc: Location) => loc.pathname,
      from: { opacity: 0, transform: "translateY(20px)" },
      enter: { opacity: 1, transform: "translateY(0px)" },
      leave: { opacity: 0, transform: "translateY(-20px)" },
      exitBeforeEnter: false,
      config: { duration: 300 },
      onRest: () => {setShowContent(true)},
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
      <main
        style={{
          position: "relative",
          minHeight: "100dvh",
          background:
            location.pathname === '/contact' ? 'var(--taupe)' :
            location.pathname === '/about' ? 'linear-gradient(var(--blue), var(--dark-blue))' :
            'var(--main-sequence-purple)'
        }}
      >
        <animated.div
          style={{
            ...style,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          {showContent && (
          <Routes location={item}>
            <Route path="aptist" element={ArtistSection('aptist', 'aptist', 'aptist-section', aptistReleases, 0, 0)} />
            <Route path="about" element={<AboutSection />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="*" element={ArtistSection('aptist', 'aptist', 'aptist-section', aptistReleases, 0, 0)} />
          </Routes>
          )}
        </animated.div>
      </main>
    ));
  }

  const Header = () => {
    const location = useLocation();
    return (
      <header
        style={{
          background:
          location.pathname === '/contact' ? 'var(--taupe)' :
          location.pathname === '/about' ? 'var(--blue)' :
          'var(--yellow)'
        }}
      >
        <a href="#about" className="skip" aria-label="skip link">Skip to main content</a>
      </header>
    );
  }

  return (
    <BrowserRouter>
      <Header />
      {showContent && <ScrollToTop />}
      <Navbar />
      <RouteTransition />
    </BrowserRouter>
  )
}
