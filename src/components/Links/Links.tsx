import type { LinkData } from '../../data/linksData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faItunes, faBandcamp, faTidal, faDeezer, type IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface LinkProps {
  data: LinkData[]
  index: number;
}

const artistLinkIcon = (icon: IconDefinition) => (<FontAwesomeIcon icon={icon}/>);

function Links(props: LinkProps) {
  const { data, index } = props

  return (
    <div className="artist-links">
      {data[index].spotify &&
      <a href={data[index].spotify} target="_blank">
        {artistLinkIcon(faSpotify)}
      </a>}
      {data[index].apple &&
      <a href={data[index].apple} target="_blank">
        {artistLinkIcon(faItunes)}
      </a>}
      {data[index].tidal &&
      <a href={data[index].tidal} target="_blank">
        {artistLinkIcon(faTidal)}
      </a>}
      {data[index].bandcamp &&
      <a href={data[index].bandcamp} target="_blank">
        {artistLinkIcon(faBandcamp)}
      </a>}
      {data[index].deezer &&
      <a href={data[index].deezer} target="_blank">
        {artistLinkIcon(faDeezer)}
      </a>}
    </div>
  )
}

export default Links
