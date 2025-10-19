import About from '../../About/About';
// import Releases from '../../Releases/Releases';
import { about } from '../../../data/aboutData';

export default function FirstSwimSection() {
  return (
    <div className="first-swim-section">
      <div className="banner">
        <div className="main-header-center-align">
          <h1 className="main-header first-swim-h1">First Swim</h1>
        </div>
      </div>
      <About
        data={about}
        index={1}
      />
      <div className="releases-cards fs flex-col">
        <h1>Releases</h1>
        <div className="release-text flex-col">
          <p>Coming Soon.</p>
        </div>
      </div>
    </div>
  )
}
