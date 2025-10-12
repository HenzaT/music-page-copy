import AlbumArt from './AlbumArt';
import { useLocation } from 'react-router';
import type { ReleaseData } from '../../data/discographyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

interface ReleasesProps {
  data: ReleaseData[]
}

export default function Releases({ data }: ReleasesProps ) {
  const { pathname } = useLocation();
  const buttonClass = classNames('hide-show-all-button', {
    'aptist-shadow': pathname === '/aptist',
    'ppf-shadow': pathname === '/paulo-post-future',
    'lm-shadow': pathname === '/little-moon'
  });

  const isTabletAndBiggerScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <>
      <div className="releases-cards">
        {isTabletAndBiggerScreen &&
        <div className="large-screen-releases-header flex-col">
          <h1>Releases</h1>
          <button type="button" className={buttonClass}>
            <FontAwesomeIcon icon={faCompactDisc} />
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
            />
          </div>
          <h2>{release.title}</h2>
        </div>
        ))}
      </div>
      {isMobileScreen &&
      <button type="button" className={buttonClass}>
        <FontAwesomeIcon icon={faCompactDisc} />
      </button>}
    </>
  )
}
