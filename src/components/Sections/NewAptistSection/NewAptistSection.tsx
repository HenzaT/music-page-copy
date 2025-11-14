import { aptistReleases } from '../../../data/discographyData';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const newestAptistRelease = aptistReleases.find(({ released }) => released);
const newestAptistImage = (description: string) => (
  <img
  src={newestAptistRelease?.img}
  alt={`${newestAptistRelease?.title ?? ""} album artwork`}
  className={`new-release-img-${description}`} />
);

const newestAptistReleaseName =
<section className="new-release-text flex-col">
  <div className="new-release-img-container" id="newest">
    <span className="faded-square-3"></span>
    <span className="faded-square-2"></span>
    <span className="faded-square-1"></span>
    {newestAptistImage('main')}
  </div>
  <div className="new-release-links flex-row">
    <h2>{newestAptistRelease?.title}. <br />
      Stream it&nbsp;
      <a href="https://distrokid.com/hyperfollow/aptist/into-skies" className="distrokid-link" target="_blank">
        here
      </a>.
    </h2>
  </div>
</section>


export default function NewAptistSection() {
  const { ref, inView } = useInView({ threshold: 0 });
  useEffect(() => {
    if (!inView) {
      console.log("im not visible")
    } else {
      console.log("im visibile")
    }
  }, [inView])

  return (
    <div ref={ref}>
      {newestAptistRelease && newestAptistReleaseName}
    </div>
  );
}
