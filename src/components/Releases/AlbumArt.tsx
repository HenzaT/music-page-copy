import { useState } from 'react';
import classNames from 'classnames';
import type { ReleaseData } from '../../data/discographyData'

interface AlbumArtProps {
  releaseImg: string
  releaseAlt: string
  data: ReleaseData[]
  tracklistLength: number
}

export default function AlbumArt({ releaseImg, releaseAlt, data, tracklistLength }: AlbumArtProps) {
  const [ isCollapsed, setIsCollapsed ] = useState<boolean>(false);
  const [ isFlipped, setIsFlipped ] = useState<boolean>(false);
  const toggleSquares = () => { setIsCollapsed(prevIsCollapsed => !prevIsCollapsed) };
  const showTracklist = () => { setIsFlipped(prevIsFlipped => !prevIsFlipped); };
  const discClasses = classNames('cd-circle cd-album', {
    'flipped': isFlipped,
    'hidden': !isCollapsed,
  });

  const silverCircle = <span className={isCollapsed ? "cd-circle" : "cd-circle hidden"}></span>;
    const goldCircle =
      <span className={discClasses} onClick={showTracklist}>
        <div className="tracklist">
          <div className="tracklist-inner">
            {data.map((release: ReleaseData, position: number) => (
              release.tracklist.length > 1 &&
              release.tracklist.map((song, idx) => (
                <p key={idx}>{song}</p>
              ))
            ))}
          </div>
        </div>
      </span>;

  return (
    <div className="album-artwork">
      <div className="release-img-container" onClick={toggleSquares}>
        <span className={isCollapsed ? "faded-square-4 collapsed" : "faded-square-4"}></span>
        <span className={isCollapsed ? "faded-square-3 collapsed" : "faded-square-3"}></span>
        <span className={isCollapsed ? "faded-square-2 collapsed" : "faded-square-2"}></span>
        <span className={isCollapsed ? "faded-square-1 collapsed" : "faded-square-1"}></span>
        <img src={releaseImg} alt={releaseAlt} className={isCollapsed ? "artwork shadow" : "artwork"} />
      </div>
      {tracklistLength > 1 ? goldCircle : silverCircle}
    </div>
  )
}
