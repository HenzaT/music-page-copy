import AlbumArt from './AlbumArt'
import type { ReleaseData } from '../../data/discographyData'

interface ReleasesProps {
  data: ReleaseData[]
}

function Releases({ data }: ReleasesProps ) {
  return (
    <div className="releases-cards">
      <h1>Releases</h1>
      <div className="release-text flex-col">
        <p>Select a release to show the disc.</p>
        <p>Select any gold disc to see the full tracklist.</p>
      </div>
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
