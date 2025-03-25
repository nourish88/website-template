import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-widget">
                <h3>Av. Işıl Nağme Evgin</h3>
                <p>
                  Profesyonel hukuki danışmanlık ve dava takibi hizmetleri
                  sunuyoruz. Hukuki sorunlarınızda yanınızdayız.
                </p>
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
            <div className="col-md-4">
              <div className="footer-widget">
                <h3>Hızlı Bağlantılar</h3>
                <ul className="footer-links">
                  <li>
                    <Link href="/">Ana Sayfa</Link>
                  </li>
                  <li>
                    <Link href="/about">Hakkımda</Link>
                  </li>
                  <li>
                    <Link href="/practice-areas">Uzmanlık Alanları</Link>
                  </li>
                  <li>
                    <Link href="/attorneys">Ekibimiz</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">İletişim</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-widget">
                <h3>Çalışma Saatleri</h3>
                <ul className="working-hours">
                  <li>
                    Pazartesi - Cuma: <span>09:00 - 18:00</span>
                  </li>
                  <li>
                    Cumartesi: <span>10:00 - 14:00</span>
                  </li>
                  <li>
                    Pazar: <span>Kapalı</span>
                  </li>
                </ul>
                <p className="mt-3">
                  Randevu almak için lütfen iletişime geçin.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  &copy; {new Date().getFullYear()} Av. Işıl Nağme Evgin. Tüm
                  Hakları Saklıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-3 bg-darker text-center">
        <div className="container">
          <small>
            &copy; {new Date().getFullYear()} Av. Işıl Nağme Evgin. Tüm hakları
            saklıdır.
          </small>
        </div>
      </div>
    </>
  );
}
