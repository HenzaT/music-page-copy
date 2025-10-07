import About from '../../About/About';
import Releases from '../../Releases/Releases';
import Links from '../../Links/Links';
import { about } from '../../../data/aboutData';
import { littleMoonReleases } from "../../../data/discographyData";
import { links } from '../../../data/linksData';

export default function LittleMoonSection() {
  return (
    <div className="little-moon-section">
      <div className="banner">
        <h1 className="main-header little-moon-h1">Little Moon</h1>
      </div>
      <About
        data={about}
        index={3}
      />
      <Releases data={littleMoonReleases}/>
      <Links
        data={links}
        index={2}
      />
    </div>
  )
}
