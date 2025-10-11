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
}

export default function Section({ artistName, sectionClassName, aboutDataIndex, linksDataIndex, artistReleases }: SectionProps) {
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
        <span className="faded-square-3"></span>
        <span className="faded-square-2"></span>
        <span className="faded-square-1"></span>
        {newestAptistImage('main')}
      </div>
      {newestAptistRelease?.title}. <br />Stream it now.
      <AudioPlayer
        src='https://soundcloud.com/aptist1/into-skies-master-5-8-25-2'
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
      />
      <Links
        data={links}
        index={linksDataIndex}
      />
    </div>
  )
}
