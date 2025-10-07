import type { ReleaseData } from '../../data/discographyData'

interface ReleasesProps {
  data: ReleaseData[]
}

function Releases(props: ReleasesProps) {
  return (
    <div className="releases-cards">
      <h1>Releases</h1>
      {props.data.map((release: ReleaseData, idx: number) => (
        release.released &&
        <div className="card flex-col" key={idx}>
          <div className="album-artwork">
            <img src={release.img} alt={release.alt} className="artwork" />
            {release.tracklist.length > 1 ? <span className="cd-album-circle"></span> : <span className="cd-circle"></span>}
          </div>
          <h2>{release.title}</h2>
          {release.tracklist.length > 1 &&
            <ol>
              {release.tracklist.map((song, i) => (
                <li key={i}>{song}</li>
              ))}
            </ol>
          }
        </div>
      ))}
    </div>
  )
}

export default Releases
