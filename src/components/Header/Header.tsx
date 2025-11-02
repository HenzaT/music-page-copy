import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

function Header() {
  const { pathname } = useLocation();
  const navColorMatchClass = classNames('navlink navlink-ltr', {
    'aptist-color': pathname === '/aptist' || pathname === '/',
    'about-color': pathname === '/about',
    'contact-color': pathname === '/contact'
  })

  const navLink = (route: string, leftOrRight: string, text: string) => {
    return (
      <NavLink to={route}>
        <button className={`nav-icon-button ${leftOrRight}`} type='button'>
          <h2 className={navColorMatchClass}>{text}</h2>
        </button>
      </NavLink>
    )
  }

  // left side of nav
  const leftNavText = () => {
    if (pathname === '/about') {
      return navLink('/aptist', 'left', 'aptist');
    } else if (pathname === '/contact') {
      return navLink('/aptist', 'left', 'aptist')
    } else {
      return navLink('/about', 'left', 'about');
    }
  }

  const rightNavText = () => {
    if (pathname === '/contact') {
      return navLink('/about', 'right', 'about');
    } else if (pathname === '/about') {
      return navLink('/contact', 'right', 'contact')
    } else {
      return navLink('/contact', 'right', 'contact');
    }
  }

  return (
    <nav>
      {leftNavText()}
      <a href="#top" className="back-to-top"></a>
      {rightNavText()}
    </nav>
  )
}

export default Header;
