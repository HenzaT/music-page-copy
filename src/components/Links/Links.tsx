import { links } from '../../data/links'

function Links() {
  return (
    <div className="artist-links">
      {links.map((link, idx) => (
        <a href={link.spotify} target="_blank" key={idx}>spotify</a>
      ))}
    </div>
  )
}

export default Links
