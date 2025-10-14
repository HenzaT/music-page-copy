import { aptistReleases } from '../../../data/discographyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const newestAptistRelease = aptistReleases.find(({ released }) => released);
const newestAptistImage = (description: string) => (
  <img
    src={newestAptistRelease?.img}
    alt={`${newestAptistRelease?.title ?? ""} album artwork`}
    className={`new-release-img-${description}`} />
);

 const newestAptistReleaseName =
<h1 className="new-release-text flex-col">
  <div className="new-release-img-container">
    <span className="faded-square-3"></span>
    <span className="faded-square-2"></span>
    <span className="faded-square-1"></span>
    {newestAptistImage('main')}
  </div>
  <div className="new-release-links flex-row">
    <h4>{newestAptistRelease?.title}. <br />Stream Now.</h4>
    <a href="https://distrokid.com/hyperfollow/aptist/into-skies" target="_blank">
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </div>
  {/* <AudioPlayer
    src='https://soundcloud.com/aptist1/into-skies-master-5-8-25-2'
    volume={0.5}
    showJumpControls={false}
  /> */}
</h1>

export default function NewAptistSection() {
  return (
    <>
      {newestAptistRelease && newestAptistReleaseName}
    </>
  );
}
