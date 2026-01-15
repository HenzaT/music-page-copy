import About from '../../components/AboutAptist/AboutAptist';
import Releases from '../../components/Releases/Releases';
import Links from '../../components/Links/Links';
import NewAptistRelease from '../../components/NewAptistRelease/NewAptistRelease';
import { about } from '../../data/aboutData';
import { links } from '../../data/linksData';
import { aptistReleases, type ReleaseData } from '../../data/discographyData';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface SectionProps {
  artistName: string,
  artistClassName: string,
  sectionClassName: string,
  aboutDataIndex: number,
  linksDataIndex: number,
  artistDiscog: ReleaseData[]
}

// const linkToAbout = () => (
//   <a href="#about" aria-label="internal link to about section on this page"><FontAwesomeIcon icon={faChevronDown} /></a>
// )

export default function Section({ artistName, artistClassName, sectionClassName, aboutDataIndex, linksDataIndex, artistDiscog }: SectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="banner flex-col-reverse">
        <h1 className={`main-header ${artistClassName}-h1`}>{artistName}</h1>
        {/* {linkToAbout()} */}
        {artistDiscog === aptistReleases && <NewAptistRelease />}
      </div>
      <div className="wrapper">
        <About
          id="about"
          data={about}
          index={aboutDataIndex}
        />
        <div className="second-wrapper">
          <Releases
            data={artistDiscog}
          />
          <Links
            data={links}
            index={linksDataIndex}
          />
        </div>
      </div>
    </section>
  )
}
