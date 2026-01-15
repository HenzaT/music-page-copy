import { aptistReleases } from '../../data/discographyData';
import BandCampPlayer from '../BandcampPlayer/BandcampPlayer';

const newestAptistRelease = aptistReleases.find(({ released }) => released);
const newestAptistImage = (description: string) => (
  <img
    src={newestAptistRelease?.img}
    alt={`${newestAptistRelease?.title ?? ""} album artwork`}
    className={`new-release-img-${description}`}
  />
);

const newestAptistReleaseName = () => (
  <section className="new-release-text flex-col">
    <div className="new-release-img-container" id="newest">
      <span className="faded-square-3"></span>
      <span className="faded-square-2"></span>
      <span className="faded-square-1"></span>
      {newestAptistImage('main')}
    </div>
    <div className="new-release-links flex-col">
      <h2>{newestAptistRelease?.title}</h2>
      {<BandCampPlayer
        trackId='4144575015'
        urlTrackName='main-sequence'
        trackName='Main Sequence'
      />}
    </div>
  </section>
)

export default function NewAptistSection() {
  return (
    <div>
      {newestAptistRelease && newestAptistReleaseName()}
    </div>
  );
}
