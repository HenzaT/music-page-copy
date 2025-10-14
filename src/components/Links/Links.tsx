import type { LinkData } from '../../data/linksData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArtistShadowClasses } from '../ReactClassNames/ArtistShadowClasses';
import { faSpotify, faItunes, faBandcamp, faTidal, faDeezer, type IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface LinkProps {
  data: LinkData[]
  index: number;
}

export default function Links({ data, index }: LinkProps) {
  const linkClass = ArtistShadowClasses('link-circle');

  const artistLinkIcon = (icon: IconDefinition, data: LinkData[], index: number, service: string) => (
    <div className={linkClass}>
      <a href={data[index][service]} target="_blank"><FontAwesomeIcon icon={icon}/></a>
    </div>
  );

  return (
    <div className="artist-links">
      {data[index].spotify && artistLinkIcon(faSpotify, data, index, 'spotify')}
      {data[index].apple && artistLinkIcon(faItunes, data, index, 'apple')}
      {data[index].tidal && artistLinkIcon(faTidal, data, index, 'tidal')}
      {data[index].bandcamp && artistLinkIcon(faBandcamp, data, index, 'bandcamp')}
      {data[index].deezer && artistLinkIcon(faDeezer, data, index, 'deezer')}
    </div>
  )
}
