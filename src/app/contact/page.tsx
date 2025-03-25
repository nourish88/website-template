import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Title */}
        <section
          className="page-title"
          style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>İletişim</h1>
                <div className="breadcrumb">
                  <Link href="/">Ana Sayfa</Link> / <span>İletişim</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-info-content">
                  <h2>İletişim Bilgilerimiz</h2>
                  <p>
                    Hukuki danışmanlık almak veya randevu oluşturmak için
                    aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz.
                  </p>

                  <div className="contact-info-box">
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <div>
                        <h4>Ofis Adresi</h4>
                        <p>Bağdat Caddesi No:123, Kadıköy, İstanbul</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-phone"></i>
                      <div>
                        <h4>Telefon</h4>
                        <p>+90 555 123 4567</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-envelope"></i>
                      <div>
                        <h4>E-posta</h4>
                        <p>info@evginhukuk.com</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-clock"></i>
                      <div>
                        <h4>Çalışma Saatleri</h4>
                        <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                        <p>Cumartesi: 10:00 - 14:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="social-media-box">
                    <h4>Sosyal Medya</h4>
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

              <div className="col-md-6">
                <div className="contact-form-content">
                  <h2>Bize Mesaj Gönderin</h2>
                  <p>
                    Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz. En
                    kısa sürede size dönüş yapacağız.
                  </p>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container-fluid p-0">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6505890983297!2d29.0630699!3d40.9867369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17f8c2f%3A0xd7aa8c4a5c5c9e3c!2sBa%C4%9Fdat%20Caddesi%2C%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
