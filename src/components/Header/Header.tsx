import { NavLink } from 'react-router-dom';


interface HeaderProps {
  showOverlay: React.MouseEventHandler<HTMLButtonElement>,
  isRotated: boolean
}

function Header(props: HeaderProps) {
  const { showOverlay, isRotated } = props
  return (
    <div className="header">
      <NavLink to="/aptist">
        <button className="nav-icon-button" type="button">
          <img src="./src/assets/images/synth.png" alt="png image of synth" className="nav-icon" />
        </button>
      </NavLink>
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
