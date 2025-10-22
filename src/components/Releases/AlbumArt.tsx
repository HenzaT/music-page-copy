import { useState, type Dispatch, type SetStateAction } from 'react';
import classNames from 'classnames';
import type { ReleaseData } from '../../data/discographyData'

interface AlbumArtProps {
  releaseImg: string
  releaseAlt: string
  data: ReleaseData[]
  tracklistLength: number
  release: ReleaseData
  isCollapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
}

export default function AlbumArt({ releaseImg, releaseAlt, tracklistLength, release, isCollapsed, setCollapsed }: AlbumArtProps) {
  const [ isFlipped, setIsFlipped ] = useState<boolean>(false);
  const discClasses = classNames('cd-circle cd-album', {
    'flipped': isFlipped,
    'hidden': !isCollapsed,
  });
  const showTracklist = () => { setIsFlipped(prevIsFlipped => !prevIsFlipped); };

  const silverCircle = <span className={isCollapsed ? "cd-circle" : "cd-circle hidden"}></span>;
  const goldCircle =
  <span className={discClasses} onClick={showTracklist}>
    <div className="tracklist">
      <div className="tracklist-inner">
        <ol>
        {release.tracklist.map((song: string) => (
          <li><p key={song} className="song-title">{song}</p></li>
        ))}
        </ol>
      </div>
    </div>
  </span>;

  return (
    <div className="album-artwork">
      <div className="release-img-container" onClick={() => setCollapsed}>
        <span className={isCollapsed ? "faded-square-3 collapsed" : "faded-square-3"}></span>
        <span className={isCollapsed ? "faded-square-2 collapsed" : "faded-square-2"}></span>
        <span className={isCollapsed ? "faded-square-1 collapsed" : "faded-square-1"}></span>
        <img src={releaseImg} alt={releaseAlt} className={isCollapsed ? "artwork shadow" : "artwork"} loading="lazy" />
      </div>
      {tracklistLength > 1 ? goldCircle : silverCircle}
    </div>
  )
}
