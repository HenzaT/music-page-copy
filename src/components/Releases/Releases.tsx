import type { ReleaseData } from '../../data/discographyData'

interface ReleasesProps {
  data: ReleaseData[]
  showTracklist: React.MouseEventHandler<HTMLSpanElement>
  isFlipped: boolean
}


function Releases(props: ReleasesProps) {
  const { data, showTracklist, isFlipped } = props;

  const silverCircle = <span className="cd-circle"></span>;
  const goldCircle =
    <span className={isFlipped ? "cd-album-circle flipped" : "cd-album-circle"} onClick={showTracklist}>
      <div className="tracklist">
        <div className="tracklist-inner">
          {data.map((release: ReleaseData) => (
            release.tracklist.length > 1 &&
            release.tracklist.map((song, idx) => (
              <p key={idx}>{song}</p>
            ))
          ))}
        </div>
      </div>
    </span>;

  return (
    <div className="releases-cards">
      <h1>Releases</h1>
      <p>Select any gold disc to see the full tracklist</p>
      {data.map((release: ReleaseData, idx: number) => (
        release.released &&
        <div className="card flex-col" key={idx}>
          <div className="album-artwork">
            <img src={release.img} alt={release.alt} className="artwork" />
            {release.tracklist.length > 1 ? goldCircle : silverCircle}
          </div>
          <h2>{release.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Releases
