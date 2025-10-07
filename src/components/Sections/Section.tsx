import About from '../About/About';
import Releases from '../Releases/Releases';
import Links from '../Links/Links';
import { about } from '../../data/aboutData';
import { links } from '../../data/linksData';
import { aptistReleases } from '../../data/discographyData';
import type { ReleaseData } from '../../data/discographyData';

interface SectionProps {
  sectionClassName: string,
  aboutDataIndex: number,
  linksDataIndex: number,
  artistReleases: ReleaseData[]
}

const newestAptistRelease = aptistReleases.find(({ released }) => released)

export default function Section(props: SectionProps) {
  const { sectionClassName, aboutDataIndex, linksDataIndex, artistReleases } = props;

  return (
    <div className={sectionClassName}>
      <div className="banner">
        {artistReleases === aptistReleases && newestAptistRelease &&
          <h1 className="new-release-text">{newestAptistRelease.title} <br />available on all <br />streaming platforms <br />now!</h1>
        }
        <h1 className="main-header aptist-h1">aptist</h1>
      </div>
      <About
        data={about}
        index={aboutDataIndex}
      />
      <Releases data={artistReleases} />
      <Links
        data={links}
        index={linksDataIndex}
      />
    </div>
  )
}
