// import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

export interface HeaderProps {
  showOverlay: React.MouseEventHandler<HTMLButtonElement>,
  isRotated: boolean
}


function Header({ showOverlay, isRotated }: HeaderProps) {

  return (
    <div className="header">
      <NavLink to="/aptist">
        <button className="nav-icon-button" type="button">
          <img src="./src/assets/images/synth.png" alt="png image of synth" className="nav-icon" />
        </button>
      </NavLink>
      <a href="#top" className="back-to-top"></a>
      <button
        type="button"
        onClick={showOverlay}
        className={!isRotated ? "nav-button" : "nav-button rotated"}>
          +
      </button>
    </div>
  )
}

export default Header;
