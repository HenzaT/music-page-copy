import Releases from '../Releases/Releases'
import { aptistReleases } from '../../data/discography'
import { about } from '../../data/about'

function AptistSection() {
  return (
    <div className="aptist-section">
      <div className="banner">
        {/* <h1>{aptistReleases[3].title} available on all streaming platforms now!</h1> */}
        <h1 className="main-header">aptist</h1>
      </div>
      {about.map((el, idx) => (
        el.artist === 'aptist' &&
        <div className="about" key={idx}>
          <p>{el.text}</p>
        </div>
      ))}
      <Releases />
    </div>
  )
}

export default AptistSection
