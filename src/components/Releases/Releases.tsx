import AlbumArt from './AlbumArt';
import type { ReleaseData } from '../../data/discographyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

interface ReleasesProps {
  data: ReleaseData[]
}

export default function Releases({ data }: ReleasesProps ) {
  const [ sharedIsCollapsed, setSharedIsCollapsed ] = useState<boolean>(false);
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const isTabletAndBiggerScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' })

  const toggleSquares = () => {
    setSharedIsCollapsed(prevIsCollapsed => !prevIsCollapsed);
    setIsClicked(prevIsClicked => !prevIsClicked);
  };

  const showAllButton = () => (
    <button type="button" className='show-all' onClick={(toggleSquares)}>
      <FontAwesomeIcon icon={faCompactDisc} className={isClicked ? 'rotated' : 'disc-icon'}/>
    </button>
  )

  return (
    <>
      <section className="releases-cards">
        {isTabletAndBiggerScreen &&
        <div className="large-screen-releases-header flex-col">
          <h1>Releases</h1>
          {showAllButton()}
        </div>
        }
        {isMobileScreen &&
        <h1>Releases</h1>}
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
          <h2>{release.title}</h2>
        </div>
        ))}
      </section>
      {isMobileScreen && showAllButton()}
    </>
  )
}
