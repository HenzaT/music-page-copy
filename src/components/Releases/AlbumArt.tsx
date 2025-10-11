import { useState } from 'react';
import classNames from 'classnames';
import type { ReleaseData } from '../../data/discographyData'

interface AlbumArtProps {
  releaseImg: string
  releaseAlt: string
  data: ReleaseData[]
  tracklistLength: number
  release: ReleaseData
}

export default function AlbumArt({ releaseImg, releaseAlt, data, tracklistLength, release }: AlbumArtProps) {
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
            <ol>
            {release.tracklist.map((song: string, idx: number) => (
              <li><p key={idx} className="song-title">{song}</p></li>
            ))}
            </ol>
          </div>
        </div>
      </span>;

  return (
    <div className="album-artwork">
      <div className="release-img-container" onClick={toggleSquares}>
        <span className={isCollapsed ? "faded-square-3 collapsed" : "faded-square-3"}></span>
        <span className={isCollapsed ? "faded-square-2 collapsed" : "faded-square-2"}></span>
        <span className={isCollapsed ? "faded-square-1 collapsed" : "faded-square-1"}></span>
        <img src={releaseImg} alt={releaseAlt} className={isCollapsed ? "artwork shadow" : "artwork"} />
      </div>
      {tracklistLength > 1 ? goldCircle : silverCircle}
    </div>
  )
}
