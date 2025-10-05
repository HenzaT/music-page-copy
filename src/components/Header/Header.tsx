import { NavLink } from 'react-router-dom';

interface HeaderProps {
  showOverlay: React.MouseEventHandler<HTMLButtonElement>,
}

const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? '#417fc1ff' : 'var(--black)',
  textDecoration: isActive ? 'underline' : 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Header(props: HeaderProps) {
  return (
    <div className="header">
      <NavLink to="/aptist">
        <button className="nav-icon-button" type="button">
          <img src="./src/assets/images/synth.png" alt="png image of synth" className="nav-icon" />
        </button>
      </NavLink>
      <button type="button" onClick={props.showOverlay} className="nav-button">+</button>
      {/* <div className="overlay flex-col">
        <NavLink to="/aptist" style={navLinkStyles}>aptist</NavLink>
        <NavLink to="/first-swim" style={navLinkStyles}>First Swim</NavLink>
        <NavLink to="/shamisen" style={navLinkStyles}>Shamisen</NavLink>
        <NavLink to="/paulo-post-future" style={navLinkStyles}>Paulo Post Future</NavLink>
        <NavLink to="/little-moon" style={navLinkStyles}>Little Moon</NavLink>
        <NavLink to="/about" style={navLinkStyles}>About</NavLink>
      </div> */}
    </div>
  )
}

export default Header
