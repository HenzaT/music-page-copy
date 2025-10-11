import type { LinkData } from '../../data/linksData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faItunes, faBandcamp, faTidal, faDeezer } from '@fortawesome/free-brands-svg-icons'

interface LinkProps {
  data: LinkData[]
  index: number;
}

function Links(props: LinkProps) {
  const { data, index } = props

  return (
    <div className="artist-links">
      {data[index].spotify && <a href={data[index].spotify} target="_blank">
        <FontAwesomeIcon icon={faSpotify}/>
      </a>}
      {data[index].apple && <a href={data[index].apple} target="_blank">
        <FontAwesomeIcon icon={faItunes}/>
      </a>}
      {data[index].tidal && <a href={data[index].tidal} target="_blank">
        <FontAwesomeIcon icon={faTidal}/>
      </a>}
      {data[index].bandcamp && <a href={data[index].bandcamp} target="_blank">
        <FontAwesomeIcon icon={faBandcamp}/>
      </a>}
      {data[index].deezer && <a href={data[index].deezer} target="_blank">
        <FontAwesomeIcon icon={faDeezer}/>
      </a>}
    </div>
  )
}

export default Links
