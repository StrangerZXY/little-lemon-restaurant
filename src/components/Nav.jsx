import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="mobile-nav" onClick={toggleNav}>
        {isOpen ? <FaRegTimesCircle /> : <GiHamburgerMenu />}
      </div>
      <nav className={`nav ${isOpen ? "active" : ""}`} onClick={toggleNav}>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="#" className="nav-item">
          About
        </Link>
        <Link to="#" className="nav-item">
          Menu
        </Link>
        <Link to="/booking" className="nav-item">
          Reservations
        </Link>
        <Link to="#" className="nav-item">
          Order Online
        </Link>
        <Link to="#" className="nav-item">
          Login
        </Link>
      </nav>
    </>
  );
}
