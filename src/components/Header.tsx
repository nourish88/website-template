"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                <Link className="nav-link" href="/">
                  Ana Sayfa
                </Link>
              </li>
              <li
                className={`nav-item ${pathname === "/about" ? "active" : ""}`}
              >
                <Link className="nav-link" href="/about">
                  Hakkımda
                </Link>
              </li>
              <li
                className={`nav-item ${
                  pathname === "/practice-areas" ? "active" : ""
                }`}
              >
                <Link className="nav-link" href="/practice-areas">
                  Uzmanlık Alanları
                </Link>
              </li>
              <li
                className={`nav-item ${
                  pathname === "/attorneys" ? "active" : ""
                }`}
              >
                <Link className="nav-link" href="/attorneys">
                  Ekibimiz
                </Link>
              </li>
              <li
                className={`nav-item ${pathname === "/blog" ? "active" : ""}`}
              >
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li>
              <li
                className={`nav-item ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" href="/contact">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
