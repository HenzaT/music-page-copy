import type { LinkData } from '../../data/linksData';
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faItunes, faBandcamp, faTidal, faDeezer, faSoundcloud, type IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface LinkProps {
  data: LinkData[]
  index: number;
}

export default function Links({ data, index }: LinkProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const artistLinkIcon = (icon: IconDefinition, data: LinkData[], index: number, service: string) => (
    <div className='link-circle'>
      <a href={data[index][service]} target="_blank"><FontAwesomeIcon icon={icon} /></a>
    </div>
  );

  return (
    <section
      ref={ref}
      className={inView ? "artist-links move-up" : "artist-links off-screen"}
      id="links"
    >
      <div className="links-top flex-row">
        {data[index].spotify && artistLinkIcon(faSpotify, data, index, 'spotify')}
        {data[index].apple && artistLinkIcon(faItunes, data, index, 'apple')}
        {data[index].tidal && artistLinkIcon(faTidal, data, index, 'tidal')}
      </div>
      <div className="links-bottom flex-row">
        {data[index].bandcamp && artistLinkIcon(faBandcamp, data, index, 'bandcamp')}
        {data[index].deezer && artistLinkIcon(faDeezer, data, index, 'deezer')}
        {data[index].soundcloud && artistLinkIcon(faSoundcloud, data, index, 'soundcloud')}
      </div>
    </section>
  )
}
