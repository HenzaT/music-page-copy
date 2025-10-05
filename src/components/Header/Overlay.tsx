import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'var(--dark-orange)' : 'var(--black)',
  textDecoration: isActive ? 'underline' : 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Overlay() {
  return (
    <div className="overlay flex-col">
      <NavLink to="/aptist" style={navLinkStyles}>aptist</NavLink>
      <NavLink to="/first-swim" style={navLinkStyles}>First Swim</NavLink>
      <NavLink to="/shamisen" style={navLinkStyles}>Shamisen</NavLink>
      <span className="dividing-line"></span>
      <NavLink to="/paulo-post-future" style={navLinkStyles}>Paulo Post Future</NavLink>
      <NavLink to="/little-moon" style={navLinkStyles}>Little Moon</NavLink>
      <span className="dividing-line"></span>
      <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      <NavLink to="/about" style={navLinkStyles}>About</NavLink>
    </div>
  )
}

export default Overlay;
