import About from '../About/About';
import Releases from '../Releases/Releases';
import Links from '../Links/Links';
import { about } from '../../data/aboutData';
import { links } from '../../data/linksData';
import { aptistReleases } from '../../data/discographyData';
import type { ReleaseData } from '../../data/discographyData';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'

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
  const newestAptistImage = (description: string) => (
    <img
      src={newestAptistRelease?.img}
      alt={`${newestAptistRelease?.title ?? ""} album artwork`}
      className={`new-release-img-${description}`}
    />
  );

  const newestAptistReleaseName =
    <h1 className="new-release-text flex-col">
      <div className="new-release-img-container">
        {newestAptistImage('front')}
        {newestAptistImage('middle')}
        {newestAptistImage('main')}
        {newestAptistImage('back')}
      </div>
      {newestAptistRelease?.title}. <br />Stream it now.
      <AudioPlayer
      src='./src/assets/audio/3. clairo 606.mp3'
      volume={0.5}
      showJumpControls={false}
      />
    </h1>

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
