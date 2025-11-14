import AlbumArt from './AlbumArt';
import type { ReleaseData } from '../../data/discographyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useInView } from "react-intersection-observer";

interface ReleasesProps {
  data: ReleaseData[]
}

export default function Releases({ data }: ReleasesProps ) {
  const isTabletAndBiggerScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' })

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const [ sharedIsCollapsed, setSharedIsCollapsed ] = useState<boolean>(false);
  const [ isClicked, setIsClicked ] = useState<boolean>(false);

  const toggleSquares = () => {
    setSharedIsCollapsed(prevIsCollapsed => !prevIsCollapsed);
    setIsClicked(prevIsClicked => !prevIsClicked);
  };

  const showAllButton = () => (
    <button type="button" className='show-all' onClick={(toggleSquares)} aria-pressed={isClicked} aria-label="toggle all discs within albums">
      <FontAwesomeIcon icon={faCompactDisc} className={isClicked ? 'rotated' : 'disc-icon'}/>
    </button>
  )

  const tabletPlusHeader = () => (
    isTabletAndBiggerScreen &&
    <div className="large-screen-releases-header flex-col">
      <h2>Releases</h2>
      {showAllButton()}
    </div>
  )

  const mobileHeader = () => (isMobileScreen && <h2>Releases</h2>)

  return (
    <>
      <section
        ref={ref}
        className={inView ? "releases-cards move-up" : "releases-cards off-screen"}
      >
        {tabletPlusHeader()}
        {mobileHeader()}
        {data.map((release: ReleaseData) => (
        release.released &&
        <div className="card flex-col" key={release.img}>
          <div className="album-artwork">
            <AlbumArt
              releaseImg={release.img}
              releaseAlt={release.alt}
              data={data}
              tracklistLength={release.tracklist.length}
              release={release}
              sharedState={sharedIsCollapsed}
            />
          </div>
          <h3>{release.title}</h3>
        </div>
        ))}
      </section>
      {isMobileScreen && showAllButton()}
    </>
  )
}
