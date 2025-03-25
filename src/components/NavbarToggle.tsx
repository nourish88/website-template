import Link from "next/link";
import NavbarToggle from "./NavbarToggle";

export default function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <span>
                  <i className="fas fa-phone"></i> +90 555 123 4567
                </span>
                <span>
                  <i className="fas fa-envelope"></i> info@evginhukuk.com
                </span>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <h1>Av. Işıl Nağme Evgin</h1>
          </Link>
          <NavbarToggle />
        </div>
      </nav>
    </header>
  );
}
