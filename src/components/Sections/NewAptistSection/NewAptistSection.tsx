import { aptistReleases } from '../../../data/discographyData';

const newestAptistRelease = aptistReleases.find(({ released }) => released);
const newestAptistImage = (description: string) => (
  <img
    src={newestAptistRelease?.img}
    alt={`${newestAptistRelease?.title ?? ""} album artwork`}
    className={`new-release-img-${description}`} />
);

const newestAptistReleaseName =
  <section className="new-release-text flex-col">
    <div className="new-release-img-container">
      <span className="faded-square-3"></span>
      <span className="faded-square-2"></span>
      <span className="faded-square-1"></span>
      {newestAptistImage('main')}
    </div>
    <div className="new-release-links flex-row">
      <h1>{newestAptistRelease?.title}. <br />
        Stream it&nbsp;
        <a href="https://distrokid.com/hyperfollow/aptist/into-skies" className="distrokid-link" target="_blank">
          here
        </a>.
      </h1>
    </div>
    {/* <AudioPlayer
      src='https://soundcloud.com/aptist1/into-skies-master-5-8-25-2'
      volume={0.5}
      showJumpControls={false}
    /> */}
  </section>

export default function NewAptistSection() {
  return (
    <>
      {newestAptistRelease && newestAptistReleaseName}
    </>
  );
}
