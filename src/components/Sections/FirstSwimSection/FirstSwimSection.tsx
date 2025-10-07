import About from '../../About/About';
import { about } from '../../../data/aboutData';

export default function FirstSwimSection() {
  return (
    <div className="first-swim-section">
      <div className="banner">
        <h1 className="main-header first-swim-h1">First Swim</h1>
      </div>
      <About
        data={about}
        index={1}
      />
    </div>
  )
}
