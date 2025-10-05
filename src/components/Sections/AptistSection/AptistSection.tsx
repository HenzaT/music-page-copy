import About from '../../About/About';
import Releases from '../../Releases/Releases';
import Links from '../../Links/Links';
import { about } from '../../../data/aboutData';
import { aptistReleases } from '../../../data/discographyData';
import { links } from '../../../data/linksData';

function AptistSection() {
  return (
    <div className="aptist-section">
      <div className="banner">
        <h1 className="new-release-text">{aptistReleases[3].title} <br />available on all <br />streaming platforms <br />now!</h1>
        <h1 className="main-header aptist-h1">aptist</h1>
      </div>
      <About
        data={about}
        index={0}
      />
      <Releases data={aptistReleases} />
      <Links
        data={links}
        index={0}
      />
    </div>
  )
}

export default AptistSection
