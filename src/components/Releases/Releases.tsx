import AlbumArt from './AlbumArt';
import { useState } from 'react';
import { useLocation } from 'react-router';
import type { ReleaseData } from '../../data/discographyData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface ReleasesProps {
  data: ReleaseData[]
}

function Releases({ data }: ReleasesProps ) {
  const { pathname } = useLocation();
  const buttonClass = classNames('hide-show-all-button', {
    'aptist-shadow': pathname === '/aptist',
    'ppf-shadow': pathname === '/paulo-post-future',
    'lm-shadow': pathname === '/little-moon'
  });

  return (
    <div className="releases-cards">
      <h1>Releases</h1>
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
      <button type="button" className={buttonClass}>
        <FontAwesomeIcon icon={faCompactDisc} />
      </button>
    </div>
  )
}

export default Releases
