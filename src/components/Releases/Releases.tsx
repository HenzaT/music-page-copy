import AlbumArt from './AlbumArt';
import ArtistShadowClasses from "../ReactClassNames/ArtistShadowClasses";
import type { ReleaseData } from '../../data/discographyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

interface ReleasesProps {
  data: ReleaseData[]
}

export default function Releases({ data }: ReleasesProps ) {
  const [ sharedIsCollapsed, setSharedIsCollapsed ] = useState<boolean>(false);
  const { pathname } = useLocation()
  const isTabletAndBiggerScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' })
  const hideShowAllButtonClass = ArtistShadowClasses('hide-show-all-button', pathname);

  const toggleSquares = () => {
    setSharedIsCollapsed(prevIsCollapsed => !prevIsCollapsed)
  };

  return (
    <>
      <section className="releases-cards">
        {isTabletAndBiggerScreen &&
        <div className="large-screen-releases-header flex-col">
          <h1>Releases</h1>
          <button type="button" className={hideShowAllButtonClass} onClick={(toggleSquares)}>
            <FontAwesomeIcon icon={faCompactDisc}/>
          </button>
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
              isCollapsed={false}
            />
          </div>
          <h2>{release.title}</h2>
        </div>
        ))}
      </section>
      {isMobileScreen &&
      <button type="button" className={hideShowAllButtonClass} onClick={(toggleSquares)}>
        <FontAwesomeIcon icon={faCompactDisc} />
      </button>}
    </>
  )
}
