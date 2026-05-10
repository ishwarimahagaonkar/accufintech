import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      
      {/*LEFT */}
      <div className="nav-left">
        <img src={logo} alt="AccuFintech Logo" className="nav-logo" />
        <span className="logo">AccuFintech</span>
      </div>

      {/*CENTER */}
      <div className="nav-center">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/*RIGHT */}
      <div className="nav-right">
      <button
        className="btn"
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
      >
        Get Consultation
      </button>
      </div>
    </nav>

  );
}

export default Navbar;