import PageLinks from "./PageLinks";
import navLogo from '../images/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="nav" id="nav">
      <div class="nav-center">
        <div class="nav-header">
          <img src={navLogo} class="nav-logo" alt="nav logo" />
          <button class="nav-btn" id="nav-btn">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul class="nav-links" style={{marginTop:"0px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <PageLinks /> */}
      </div>
    </nav>
  );
};

export default Navbar;
