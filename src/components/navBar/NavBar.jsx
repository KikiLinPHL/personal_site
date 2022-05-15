import "./navBar.scss"

export default function NavBar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navBar " + (menuOpen && "active")}>
      <div className="wrapper">
        
        <div className="left">
          <a href="#intro" className="logo">Kiki Lin</a>
          <div className="itemContainer"></div> {/* if I want something next to my name in the header */}
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
