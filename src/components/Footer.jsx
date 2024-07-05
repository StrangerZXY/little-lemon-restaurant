import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <img src={require("../assets/footer.png")} alt="little lemon" />
      <div className="footer-content">
        <div className="footer-nav">
          <p className="footer-head">Navigtion</p>
          <Link to="/" className="footer-item">
            Home
          </Link>
          <Link at="#" className="footer-item">
            About
          </Link>
          <Link at="#" className="footer-item">
            Menu
          </Link>
          <Link to="/booking" className="footer-item">
            Reservations
          </Link>
          <Link at="#" className="footer-item">
            Order Online
          </Link>
          <Link at="#" className="footer-item">
            Login
          </Link>
        </div>
        <div className="footer-contact">
          <p className="footer-head">Contact</p>
          <Link at="#" className="footer-item">
            Address
          </Link>
          <Link at="#" className="footer-item">
            Phone Number
          </Link>
          <Link at="#" className="footer-item">
            Email
          </Link>
        </div>
        <div className="footer-social">
          <p className="footer-head">Social Media</p>
          <Link at="#" className="footer-item">
            Facebook
          </Link>
          <Link at="#" className="footer-item">
            Instagram
          </Link>
          <Link at="#" className="footer-item">
            TikTok
          </Link>
          <Link at="#" className="footer-item">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
