import Releases from '../../Releases/Releases'
import Links from '../../Links/Links'
import { aptistReleases } from '../../../data/discography'
import { about } from '../../../data/about'

function AptistSection() {
  return (
    <div className="aptist-section">
      <div className="banner">
        <h1 className="main-header aptist-h1">aptist</h1>
      </div>
      <div className="info">
        <h1>{aptistReleases[3].title} available on all streaming platforms now!</h1>
        {about.map((el, idx) => (
          el.artist === 'aptist' &&
          <div className="about" key={idx}>
            <p>{el.text}</p>
          </div>
        ))}
      </div>
      <Releases data={ aptistReleases }/>
      <Links />
    </div>
  )
}

export default AptistSection
