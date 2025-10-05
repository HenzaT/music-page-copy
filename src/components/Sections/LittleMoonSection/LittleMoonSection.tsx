import Releases from '../../Releases/Releases'
import { littleMoonReleases } from "../../../data/discography";

function LittleMoonSection() {
  return (
    <div className="little-moon-section">
      <div className="banner">
        <h1 className="main-header little-moon-h1">Little Moon</h1>
      </div>
      <Releases data={ littleMoonReleases }/>
    </div>
  )
}

export default LittleMoonSection;
