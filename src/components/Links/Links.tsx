import { links } from '../../data/links'

function Links() {
  return (
    <div className="artist-links">
      {links.map((link) => (
        <a href={link.spotify} target="_blank">spotify</a>
      ))}
    </div>
  )
}

export default Links
