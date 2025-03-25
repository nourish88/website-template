import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PracticeAreasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Title */}
        <section
          className="page-title"
          style={{ backgroundImage: "url('/images/practice-bg.jpg')" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Uzmanlık Alanları</h1>
                <div className="breadcrumb">
                  <Link href="/">Ana Sayfa</Link> /{" "}
                  <span>Uzmanlık Alanları</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Content */}
        <section className="practice-areas-content">
          <div className="container">
            <div className="section-title text-center">
              <h2>Hukuki Hizmetlerimiz</h2>
              <p>Aşağıdaki alanlarda uzman kadromuzla hizmet vermekteyiz</p>
            </div>

            <div className="row">
              {practiceAreas.map((area, index) => (
                <div key={index} className="col-md-6">
                  <div className="practice-area-item">
                    <div className="icon">
                      <i className={area.icon}></i>
                    </div>
                    <div className="content">
                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                      <ul>
                        {area.services.map((service, idx) => (
                          <li key={idx}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 text-center">
                <h2>Hukuki Danışmanlık İçin Bize Ulaşın</h2>
                <p>
                  Hukuki sorunlarınızla ilgili profesyonel destek almak için
                  hemen iletişime geçin.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Randevu Alın
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const practiceAreas = [
  {
    title: "Aile Hukuku",
    icon: "fas fa-user-friends",
    description:
      "Boşanma, velayet, nafaka, mal paylaşımı, evlat edinme ve aile içi şiddet gibi konularda hukuki danışmanlık ve dava takibi hizmetleri sunuyoruz. Aile hukuku alanında hassas ve çözüm odaklı bir yaklaşım benimsiyoruz.",
    services: [
      "Boşanma davaları",
      "Velayet ve nafaka davaları",
      "Mal paylaşımı",
      "Evlat edinme işlemleri",
      "Aile içi şiddet ve koruma kararları",
    ],
  },
  {
    title: "Ticaret Hukuku",
    icon: "fas fa-landmark",
    description:
      "Şirket kurulumları, ticari sözleşmeler, şirket birleşme ve devralmaları, rekabet hukuku ve fikri mülkiyet hakları konularında danışmanlık hizmetleri veriyoruz. İş dünyasının dinamik yapısına uygun çözümler üretiyoruz.",
    services: [
      "Şirket kurulumları ve tasfiye işlemleri",
      "Ticari sözleşmeler",
      "Şirket birleşme ve devralmaları",
      "Rekabet hukuku uyuşmazlıkları",
      "Fikri mülkiyet hakları",
    ],
  },
  {
    title: "Ceza Hukuku",
    icon: "fas fa-balance-scale",
    description:
      "Ceza davalarında savunma, soruşturma ve kovuşturma aşamalarında hukuki danışmanlık, suç duyurusu ve şikayet başvuruları konularında hizmet veriyoruz. Adil yargılanma hakkını korumak için titizlikle çalışıyoruz.",
    services: [
      "Ceza davalarında savunma",
      "Soruşturma ve kovuşturma aşamalarında danışmanlık",
      "Suç duyurusu ve şikayet başvuruları",
      "Uzlaşma görüşmeleri",
      "Ceza infaz hukuku danışmanlığı",
    ],
  },
  {
    title: "İş Hukuku",
    icon: "fas fa-briefcase",
    description:
      "İşçi-işveren ilişkileri, iş sözleşmeleri, işe iade davaları, tazminat talepleri ve toplu iş hukuku konularında danışmanlık hizmetleri sunuyoruz. Hem işçi hem de işveren tarafı için adil çözümler üretiyoruz.",
    services: [
      "İş sözleşmeleri hazırlama ve inceleme",
      "İşe iade davaları",
      "Kıdem ve ihbar tazminatı davaları",
      "İş kazası ve meslek hastalığı davaları",
      "Toplu iş sözleşmeleri",
    ],
  },
  {
    title: "Gayrimenkul Hukuku",
    icon: "fas fa-home",
    description:
      "Taşınmaz alım-satım işlemleri, kira sözleşmeleri, kat mülkiyeti, tapu iptali ve tescil davaları konularında hukuki danışmanlık hizmetleri veriyoruz. Gayrimenkul işlemlerinizde güvenli adımlar atmanızı sağlıyoruz.",
    services: [
      "Taşınmaz alım-satım işlemleri",
      "Kira sözleşmeleri ve uyuşmazlıkları",
      "Kat mülkiyeti ve kat irtifakı işlemleri",
      "Tapu iptali ve tescil davaları",
      "İnşaat ve imar hukuku uyuşmazlıkları",
    ],
  },
  {
    title: "Arabuluculuk",
    icon: "fas fa-handshake",
    description:
      "İş, ticaret ve tüketici uyuşmazlıklarında arabuluculuk hizmetleri sunuyoruz. Taraflar arasında uzlaşma sağlayarak, dava sürecine girmeden çözüm üretilmesine yardımcı oluyoruz.",
    services: [
      "İş hukuku uyuşmazlıklarında arabuluculuk",
      "Ticari uyuşmazlıklarda arabuluculuk",
      "Tüketici uyuşmazlıklarında arabuluculuk",
      "Aile hukuku uyuşmazlıklarında arabuluculuk",
      "Uzlaşma görüşmeleri yönetimi",
    ],
  },
];
