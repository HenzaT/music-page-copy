import { NavLink, useLocation } from 'react-router-dom';
import ArtistColorClasses from "../ReactClassNames/ArtistColorClasses";

interface OverlayProps {
  showOverlay: React.MouseEventHandler<HTMLAnchorElement>
}

const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: isActive ? 'underline' : 'none',
  fontWeight: '700',
  padding: '5px 10px'
});

export default function Overlay({ showOverlay }: OverlayProps) {
  const { pathname } = useLocation();
  const navLink = (url: string, func: React.MouseEventHandler<HTMLAnchorElement>, text: string) => (
    <NavLink to={url} className={ArtistColorClasses('nav-link', pathname)} style={navLinkStyles} onClick={func}>{text}</NavLink>
  )
  const dividingLine = <span className={ArtistColorClasses('dividing-line', pathname)}></span>;
  
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
