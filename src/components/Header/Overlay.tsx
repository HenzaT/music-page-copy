import { NavLink } from 'react-router-dom';

interface OverlayProps {
  showOverlay: React.MouseEventHandler<HTMLAnchorElement>
}

const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'var(--dark-orange)' : 'var(--black)',
  textDecoration: isActive ? 'underline' : 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

const dividingLine = <span className="dividing-line"></span>;

const navLink = (url: string, func: React.MouseEventHandler<HTMLAnchorElement>, text: string) => {
  return (<NavLink to={url} style={navLinkStyles} onClick={func}>{text}</NavLink>)
}

function Overlay({ showOverlay }: OverlayProps) {
  return (
    <div className="overlay flex-col">
      {navLink('/aptist', showOverlay, 'aptist')}
      {navLink('/first-swim', showOverlay, 'First Swim')}
      {navLink('/shamisen', showOverlay, 'Shamisen')}
      {dividingLine}
      {navLink('/paulo-post-future', showOverlay, 'Paulo Post Future')}
      {navLink('/little-moon', showOverlay, 'Little Moon')}
      {dividingLine}
      {/* {navLink('/contact', showOverlay, 'Contact')} */}
      {navLink('/about', showOverlay, 'About')}
    </div>
  )
}

export default Overlay;
