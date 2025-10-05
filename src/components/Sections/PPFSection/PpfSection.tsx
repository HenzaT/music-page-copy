import Releases from '../../Releases/Releases'
import { ppfReleases } from "../../../data/discography"

function PpfSection() {
  return (
    <div className="ppf-section">
      <div className="banner">
        <h1 className="main-header ppf-h1">Paulo Post Future</h1>
      </div>
      <Releases data={ ppfReleases }/>
    </div>
  )
}

export default PpfSection
