import About from '../About/About';
import Releases from '../Releases/Releases';
import Links from '../Links/Links';
import { about } from '../../data/aboutData';
import { links } from '../../data/linksData';
import { aptistReleases } from '../../data/discographyData';
import type { ReleaseData } from '../../data/discographyData';

interface SectionProps {
  artistName: string
  sectionClassName: string,
  aboutDataIndex: number,
  linksDataIndex: number,
  artistReleases: ReleaseData[]
  showTracklist: React.MouseEventHandler<HTMLSpanElement>
  isFlipped: boolean
}

export default function Section(props: SectionProps) {
  const {
    artistName,
    sectionClassName,
    aboutDataIndex,
    linksDataIndex,
    artistReleases,
    showTracklist,
    isFlipped
  } = props;

  const newestAptistRelease = aptistReleases.find(({ released }) => released);
  const newestAptistReleaseName = <h1 className="new-release-text">{newestAptistRelease.title} <br />available on all <br />streaming platforms <br />now!</h1>

  return (
    <div className={sectionClassName}>
      <div className="banner">
        {artistReleases === aptistReleases && newestAptistRelease &&
          newestAptistReleaseName
        }
        <h1 className={`main-header ${artistName}-h1`}>{artistName}</h1>
      </div>
      <About
        data={about}
        index={aboutDataIndex}
      />
      <Releases
        data={artistReleases}
        showTracklist={showTracklist}
        isFlipped={isFlipped}
      />
      <Links
        data={links}
        index={linksDataIndex}
      />
    </div>
  )
}
