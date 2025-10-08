import AlbumArt from './AlbumArt'
import type { ReleaseData } from '../../data/discographyData'

interface ReleasesProps {
  data: ReleaseData[]
}

function Releases(props: ReleasesProps) {
  const { data } = props;

  // const silverCircle = <span className="cd-circle"></span>;
  // const goldCircle =
  //   <span className={isFlipped ? "cd-album-circle flipped" : "cd-album-circle"} onClick={showTracklist}>
  //     <div className="tracklist">
  //       <div className="tracklist-inner">
  //         {data.map((release: ReleaseData) => (
  //           release.tracklist.length > 1 &&
  //           release.tracklist.map((song, idx) => (
  //             <p key={idx}>{song}</p>
  //           ))
  //         ))}
  //       </div>
  //     </div>
  //   </span>;

  return (
    <div className="releases-cards">
      <h1>Releases</h1>
      <p>Select any gold disc to see the full tracklist</p>
      {data.map((release: ReleaseData) => (
        release.released &&
        <div className="card flex-col" key={release.img}>
          <div className="album-artwork">
            <AlbumArt
              releaseImg={release.img}
              releaseAlt={release.alt}
              data={data}
              tracklistLength={release.tracklist.length}
            />
          </div>
          <h2>{release.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Releases
