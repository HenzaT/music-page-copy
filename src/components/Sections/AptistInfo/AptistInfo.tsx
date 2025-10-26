import type { aptistSongDataType } from '../../../data/aptistSongData';
import type { ReleaseData } from '../../../data/discographyData';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

interface AptistInfoProps {
  songData: aptistSongDataType[]
  aptistDiscog: ReleaseData[]
}

export default function AptistInfo({ songData, aptistDiscog }: AptistInfoProps) {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' });

  const alignCenter = { display: 'flex', alignItesm: 'center' };

  const InfoElement = (flex: string, img: string, alt: string, title: string, link: string, info: string) => (
    <div className={`info-element ${flex}`}>
      <img src={img} alt={alt} className="aptist-info-img" />
      <div className="aptist-info-txt">
        <span className="title-link flex-row">
          <h1 key={title}>{title}</h1>
          <a href={link}><FontAwesomeIcon icon={faLink}/></a>
        </span>
        <p>{info}</p>
      </div>
    </div>
  )

  return (
  <section className="aptist-release-info">
    {aptistDiscog.map((release) => (songData.map((song) => {
      if (release.title === song.title && release.released) {
        return (
          isMobileScreen
          ? InfoElement('flex-col', release.img, release.alt, song.title, song.link, song.info)
          : InfoElement('flex-row', release.img, release.alt, song.title, song.link, song.info)
        )
      }
    })
  ))}
  </section>
)};
