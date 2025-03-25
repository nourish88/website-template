import Link from "next/link";

export default function ExpertiseAreas() {
  return (
    <section className="expertise-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Uzmanlık Alanlarımız</h2>
        <div className="row">
          {/* Aile Hukuku */}
          <div className="col-md-4 mb-4">
            <div className="card expertise-card h-100">
              <div className="card-body">
                <div className="expertise-icon mb-3">
                  <i className="fas fa-home"></i>
                </div>
                <h3 className="card-title">Aile Hukuku</h3>
                <p className="card-text">
                  Boşanma, nafaka, velayet ve miras davalarında uzman hukuki
                  danışmanlık.
                </p>
                <Link
                  href="/practice-areas#family-law"
                  className="btn btn-link p-0 read-more"
                >
                  Ayrıntılı Bilgi
                </Link>
              </div>
            </div>
          </div>

          {/* Ticaret Hukuku */}
          <div className="col-md-4 mb-4">
            <div className="card expertise-card h-100">
              <div className="card-body">
                <div className="expertise-icon mb-3">
                  <i className="fas fa-building"></i>
                </div>
                <h3 className="card-title">Ticaret Hukuku</h3>
                <p className="card-text">
                  Şirket kurulumları, ticari anlaşmazlıklar ve iş hukuku
                  konularında destek.
                </p>
                <Link
                  href="/practice-areas#commercial-law"
                  className="btn btn-link p-0 read-more"
                >
                  Ayrıntılı Bilgi
                </Link>
              </div>
            </div>
          </div>

          {/* Ceza Hukuku */}
          <div className="col-md-4 mb-4">
            <div className="card expertise-card h-100">
              <div className="card-body">
                <div className="expertise-icon mb-3">
                  <i className="fas fa-gavel"></i>
                </div>
                <h3 className="card-title">Ceza Hukuku</h3>
                <p className="card-text">
                  Ceza davalarında savunma ve hukuki danışmanlık hizmetleri.
                </p>
                <Link
                  href="/practice-areas#criminal-law"
                  className="btn btn-link p-0 read-more"
                >
                  Ayrıntılı Bilgi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
