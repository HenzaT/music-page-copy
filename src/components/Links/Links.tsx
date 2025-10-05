import type { LinkData } from '../../data/linksData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faItunes, faBandcamp } from '@fortawesome/free-brands-svg-icons'

interface LinkProps {
  data: LinkData[]
  index: number;
}

function Links(props: LinkProps) {
  const { data, index } = props
  return (
    <div className="artist-links">
      <a href={data[index].spotify} target="_blank">
        <FontAwesomeIcon icon={faSpotify}/>
      </a>
      <a href={data[index].apple} target="_blank">
        <FontAwesomeIcon icon={faItunes}/>
      </a>
      <a href={data[index].bandcamp} target="_blank">
        <FontAwesomeIcon icon={faBandcamp}/>
      </a>
    </div>
  )
}

export default Links
