import About from '../../About/About';
import Releases from '../../Releases/Releases';
import Links from '../../Links/Links';
import { about } from '../../../data/aboutData';
import { ppfReleases } from "../../../data/discographyData";
import { links } from '../../../data/linksData';

function PpfSection() {
  return (
    <div className="ppf-section">
      <div className="banner">
        <h1 className="main-header ppf-h1">Paulo Post Future</h1>
      </div>
      <About
        data={about}
        index={2}
      />
      <Releases data={ppfReleases}/>
      <Links
        data={links}
        index={2}
      />
    </div>
  )
}

export default PpfSection
