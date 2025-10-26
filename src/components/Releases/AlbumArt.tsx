import { useState, useEffect } from 'react';
import classNames from 'classnames';
import type { ReleaseData } from '../../data/discographyData'

interface AlbumArtProps {
  releaseImg: string
  releaseAlt: string
  data: ReleaseData[]
  tracklistLength: number
  release: ReleaseData
  // sharedCollapseState
  sharedState: boolean
}

export default function AlbumArt(props: AlbumArtProps) {
  const { releaseImg, releaseAlt, tracklistLength, release, sharedState } = props;
  const [ isFlipped, setIsFlipped ] = useState<boolean>(false);
  const [ isToggled, setIsToggled ] = useState<boolean>(false);
  const discClasses = classNames('cd-circle cd-album', {
    'flipped': isFlipped,
    'hidden': !isToggled,
  });
  const showTracklist = () => {
    setIsFlipped(prevIsFlipped => !prevIsFlipped)
  };

  const handleClick = () => {
    setIsToggled(prev => !prev)
  }

  useEffect(() => {
    setIsToggled(sharedState)
  }, [sharedState]);


  const silverCircle = <span className={isToggled ? "cd-circle" : "cd-circle hidden"}></span>;
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
      <div className="release-img-container" onClick={handleClick}>
        <span className={sharedState || isToggled ? "faded-square-3 collapsed" : "faded-square-3"}></span>
        <span className={sharedState || isToggled ? "faded-square-2 collapsed" : "faded-square-2"}></span>
        <span className={sharedState || isToggled ? "faded-square-1 collapsed" : "faded-square-1"}></span>
        <img src={releaseImg} alt={releaseAlt} className={sharedState || isToggled ? "artwork shadow" : "artwork"} loading="lazy" />
      </div>
      {tracklistLength > 1 ? goldCircle : silverCircle}
    </div>
  )
}
