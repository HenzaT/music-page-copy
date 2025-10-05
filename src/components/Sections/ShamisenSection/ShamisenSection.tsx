import About from '../../About/About';
import { about } from '../../../data/aboutData';

function ShamisenSection() {
  return (
    <div className="shamisen-section">
      <div className="banner">
        <h1 className="main-header shamisen-h1">Shamisen</h1>
      </div>
      <About
        data={about}
        index={4}
      />
    </div>
  )
}

export default ShamisenSection;
