import type { aptistSongDataType } from '../../../data/aptistSongData';
import type { ReleaseData } from '../../../data/discographyData';
import { useMediaQuery } from 'react-responsive';

interface AptistInfoProps {
  songData: aptistSongDataType[]
  aptistDiscog: ReleaseData[]
}

export default function AptistInfo({ songData, aptistDiscog }: AptistInfoProps) {
  const isTabletAndBiggerScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' })

  const AptistInfoElement = aptistDiscog.map((release) => (
    songData.map((song) => {
      if (release.title === song.title && release.released) {
        if (isMobileScreen) {
          return (
            <div className="info-element flex-col">
              <img src={release.img} alt={release.alt} className="aptist-info-img" />
              <div className="aptist-info-txt">
                <h1 key={song.title}>{song.title}</h1>
                <p>{song.info}</p>
              </div>
            </div>
          )
        }

        if (isTabletAndBiggerScreen) {
          return (
            <div className="info-element flex-row">
              <img src={release.img} alt={release.alt} className="aptist-info-img" />
              <div className="aptist-info-txt">
                <h1 key={song.title}>{song.title}</h1>
                <p>{song.info}</p>
              </div>
            </div>
          )
        }

      }
    })
  )
)

  return (
    <section className="aptist-release-info">
      {AptistInfoElement}
    </section>
  )
};
