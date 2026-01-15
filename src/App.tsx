import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { useState } from 'react';

import { aptistReleases } from './data/discographyData';
import type { ReleaseData } from './data/discographyData';

import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './ScrollToTop';

import AptistHomePage from './Pages/AptistHomePage/AptistHomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';

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
      <AptistHomePage
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
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
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
          'var(--main-sequence-purple)'
        }}
      >
        <a href="#about" className="skip" aria-label="skip link">Skip to main content</a>
      </header>
    );
  }

  return (
    <BrowserRouter>
      {<Header />}
      {showContent && <ScrollToTop />}
      <Navbar />
      <RouteTransition />
    </BrowserRouter>
  )
}
