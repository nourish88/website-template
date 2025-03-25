import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Title */}
        <section
          className="page-title"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Hakkımda</h1>
                <div className="breadcrumb">
                  <Link href="/">Ana Sayfa</Link> / <span>Hakkımda</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="about-content-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about-image">
                  <Image
                    src="/images/lawyer-profile.jpg"
                    alt="Av. Işıl Nağme Evgin"
                    width={540}
                    height={400}
                    style={{
                      marginLeft: "-20px",
                      marginTop: "-20px",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content">
                  <h2>Av. Işıl Nağme Evgin</h2>
                  <p>
<<<<<<< HEAD
                    2000 yılında Atılım Üniversitesi Hukuk Fakültesi&apos;nden
                    mezun oldum. Mezuniyetimin ardından AnkaraBarosu&apos;na
=======
                    2000 yılında İstanbul Üniversitesi Hukuk Fakültesi&apos;nden
                    mezun oldum. Mezuniyetimin ardından İstanbul Barosu&apos;na
>>>>>>> 5e9ab0f33a561dce98bdf57fbab7c37d7b76920f
                    kayıtlı olarak avukatlık mesleğine başladım.
                  </p>
                  <p>
                    Kariyerime önce kurumsal bir hukuk bürosunda başladım ve 5
                    yıl boyunca çeşitli ticari davalarda deneyim kazandım. 2005
                    yılında kendi hukuk büromu kurarak bağımsız çalışmaya
                    başladım.
                  </p>
                  <p>
                    Aile hukuku, ticaret hukuku ve ceza hukuku alanlarında
                    uzmanlaşmış olup, her davanın kendine özgü koşullarını
                    dikkate alarak çözüm odaklı bir yaklaşım benimsiyorum.
                  </p>
                  <p>
                    Müvekkillerime sadece hukuki danışmanlık değil, aynı zamanda
                    zorlu süreçlerde duygusal destek de sağlamayı önemsiyorum.
                    Her müvekkilimin davasını kendi davam gibi sahipleniyor ve
                    en iyi sonucu almak için çalışıyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="education-experience-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="education-box">
                  <h3>Eğitim</h3>
                  <div className="timeline">
                    {[
                      {
                        year: "1995-2000",
                        title: "Hukuk Lisans Derecesi",
                        institution: "Atılım Üniversitesi Hukuk Fakültesi",
                      },
                      {
                        year: "2002-2004",
                        title: "Yüksek Lisans - Ticaret Hukuku",
                        institution: "Marmara Üniversitesi",
                      },
                      {
                        year: "2010",
                        title: "Arabuluculuk Sertifikası",
                        institution: "Adalet Bakanlığı",
                      },
                    ].map((edu, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-year">{edu.year}</div>
                        <div className="timeline-content">
                          <h4>{edu.title}</h4>
                          <p>{edu.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="experience-box">
                  <h3>Deneyim</h3>
                  <div className="timeline">
                    {[
                      {
                        year: "2000-2005",
                        title: "Avukat",
                        company: "Yılmaz & Ortakları Hukuk Bürosu",
                      },
                      {
                        year: "2005-Günümüz",
                        title: "Kurucu Avukat",
                        company: "Evgin Hukuk Bürosu",
                      },
                      {
                        year: "2012-2018",
                        title: "Hukuk Danışmanı",
                        company: "ABC Holding",
                      },
                    ].map((exp, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-year">{exp.year}</div>
                        <div className="timeline-content">
                          <h4>{exp.title}</h4>
                          <p>{exp.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="container">
            <div className="section-title text-center">
              <h2>Uzmanlık Alanlarım</h2>
              <p>Hukuki konularda uzmanlaşma seviyelerim</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                {[
                  { name: "Aile Hukuku", percentage: 95 },
                  { name: "Ticaret Hukuku", percentage: 90 },
                  { name: "Ceza Hukuku", percentage: 85 },
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <h4>{skill.name}</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.percentage}%` }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {skill.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                {[
                  { name: "İş Hukuku", percentage: 80 },
                  { name: "Gayrimenkul Hukuku", percentage: 75 },
                  { name: "Arabuluculuk", percentage: 90 },
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <h4>{skill.name}</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.percentage}%` }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {skill.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
