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
      {/* <div className="overlay flex-col">
        <a href="aptist">aptist</a>
        <a href="first-swim">First Swim</a>
        <a href="shamisen">Shamisen</a>
        <a href="about">About</a>
        <a href="paulo-post-future">Paulo Post Future</a>
        <a href="little-moon">Little Moon</a>
      </div> */}
    </div>
  )
}

export default Header
