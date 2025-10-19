import About from '../About/About';
import Releases from '../Releases/Releases';
import Links from '../Links/Links';
import NewAptistSection from '../Sections/NewAptistSection/NewAptistSection';
import { about } from '../../data/aboutData';
import { links } from '../../data/linksData';
import { aptistReleases, type ReleaseData } from '../../data/discographyData';
// import { useScroll, animated } from '@react-spring/web';

interface SectionProps {
  artistName: string,
  artistClassName: string,
  sectionClassName: string,
  aboutDataIndex: number,
  linksDataIndex: number,
  artistDiscog: ReleaseData[]
}

export default function Section({ artistName, artistClassName, sectionClassName, aboutDataIndex, linksDataIndex, artistDiscog }: SectionProps) {
  return (
    <div className={sectionClassName}>
      <div className="banner">
        {artistDiscog === aptistReleases && <NewAptistSection />}
        <div className="main-header-center-align">
          <h1 className={`main-header ${artistClassName}-h1`}>{artistName}</h1>
        </div>
      </div>
      <About
        data={about}
        index={aboutDataIndex}
      />
      <Releases
        data={artistDiscog}
      />
      <Links
        data={links}
        index={linksDataIndex}
      />
    </div>
  )
}
