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
          <img src={release.img} alt={release.alt} className="artwork" />
          <h2>{release.title}</h2>
          <ol>
            {release.tracklist.map((song, i) => (
              <li key={i}>{song}</li>
            ))}
          </ol>
          <h2>{release.releaseDate}</h2>
        </div>
      ))}
    </div>
  )
}

export default Releases
