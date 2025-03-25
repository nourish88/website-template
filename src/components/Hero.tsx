import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content" data-aos="fade-up">
          <h1>Hukuki Haklarınız İçin Güvenilir Çözüm Ortağınız</h1>
          <p className="lead mb-4">
            20 yılı aşkın tecrübemizle, karmaşık hukuki süreçlerde sizin
            yanınızdayız.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Randevu Alın
            </Link>
            <Link href="/about" className="btn btn-light">
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
