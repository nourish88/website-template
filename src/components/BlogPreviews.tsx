import Link from "next/link";
import Image from "next/image";

export default function BlogPreviews() {
  const blogPosts = [
    {
      id: 1,
      title: "Yeni Arabuluculuk Kanunu ve İş Hukukuna Etkileri",
      excerpt:
        "Son yasal düzenlemelerle birlikte arabuluculuk süreçlerinde meydana gelen değişiklikler ve bunların iş davalarına yansımaları hakkında bilmeniz gerekenler.",
      date: "15 Mart 2023",
      author: "Av. Işıl Nağme Evgin",
      category: "İş Hukuku",
      image: "/images/blog-1.jpg",
      slug: "yeni-arabuluculuk-kanunu-ve-is-hukukuna-etkileri",
    },
    {
      id: 2,
      title: "Boşanma Sürecinde Mal Paylaşımı: Sık Sorulan Sorular",
      excerpt:
        "Boşanma davalarında en çok tartışma konusu olan mal paylaşımı hakkında merak edilenler ve yasal haklarınızı korumanın yolları.",
      date: "28 Şubat 2023",
      author: "Av. Işıl Nağme Evgin",
      category: "Aile Hukuku",
      image: "/images/blog-2.jpg",
      slug: "bosanma-surecinde-mal-paylasimi-sik-sorulan-sorular",
    },
    {
      id: 3,
      title: "Ticari Şirketlerde Yönetim Kurulu Sorumluluğu",
      excerpt:
        "Anonim şirketlerde yönetim kurulu üyelerinin hukuki ve mali sorumlulukları hakkında detaylı bir inceleme ve risk yönetimi önerileri.",
      date: "10 Ocak 2023",
      author: "Av. Işıl Nağme Evgin",
      category: "Ticaret Hukuku",
      image: "/images/blog-3.jpg",
      slug: "ticari-sirketlerde-yonetim-kurulu-sorumlulugu",
    },
  ];

  return (
    <section className="blog-preview-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Hukuki Makaleler</h2>
          <p className="section-subtitle">
            Güncel hukuki gelişmeler ve bilgilendirici içerikler
          </p>
        </div>

        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 mb-4">
              <div className="blog-card">
                <div className="blog-image-container">
                  <Link href={`/blog/${post.slug}`}>
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={350}
                        height={200}
                        className="blog-image"
                      />
                    ) : (
                      <div className="blog-image-placeholder">
                        <i className="fas fa-newspaper"></i>
                      </div>
                    )}
                  </Link>
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <i className="far fa-calendar-alt"></i> {post.date}
                    </span>
                    <span className="blog-author">
                      <i className="far fa-user"></i> {post.author}
                    </span>
                  </div>
                  <h3 className="blog-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="read-more">
                    Devamını Oku <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link href="/blog" className="btn btn-outline-primary view-all-btn">
            Tüm Makaleleri Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}
