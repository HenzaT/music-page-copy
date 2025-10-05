import { Link } from 'react-router-dom';

interface HeaderProps {
  showOverlay: React.MouseEventHandler<HTMLButtonElement>
}

function Header(props: HeaderProps) {
  return (
    <div className="header">
      <button className="nav-icon-button" type="button">
        <img src="./src/assets/images/synth.png" alt="png image of synth" className="nav-icon" />
      </button>
      <button type="button" onClick={props.showOverlay} className="nav-button">+</button>
      <div className="overlay flex-col">
        <Link to="/aptist">aptist</Link>
        <Link to="/first-swim">First Swim</Link>
        <Link to="/shamisen">Shamisen</Link>
        <Link to="/about">About</Link>
        <Link to="/paulo-post-future">Paulo Post Future</Link>
        <Link to="/little-moon">Little Moon</Link>
      </div>
    </div>
  )
}

export default Header
