// import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink to="/aptist">
        <button className="nav-icon-button" type="button">
          <img src="./src/assets/images/synth.png" alt="png image of synth" className="nav-icon" />
        </button>
      </NavLink>
      <a href="#top" className="back-to-top"></a>
    </nav>
  )
}

export default Header;
