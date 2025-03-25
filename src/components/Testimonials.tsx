"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      position: "İş İnsanı",
      quote:
        "Av. Işıl Nağme Evgin, şirketimizin hukuki süreçlerinde gösterdiği profesyonel yaklaşım ve çözüm odaklı stratejileriyle bize büyük katkı sağladı. Kendisiyle çalışmak her zaman güven verici.",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Zeynep Kaya",
      position: "Eğitimci",
      quote:
        "Boşanma sürecimde bana gösterdiği anlayış ve sabır için Av. Işıl Hanım'a minnettarım. Zor bir dönemde haklarımı koruyarak, sürecin en az hasarla tamamlanmasını sağladı.",
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Mehmet Demir",
      position: "Mimar",
      quote:
        "Gayrimenkul davamızda gösterdiği titiz çalışma ve hukuki uzmanlık sayesinde haklarımızı başarıyla savundu. Kendisini tüm dostlarıma tavsiye ediyorum.",
      image: "/images/testimonial-3.jpg",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Müvekkil Görüşleri</h2>

        <div className="testimonial-slider position-relative">
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <div className="testimonial-card text-center">
                  <div className="testimonial-image mx-auto mb-4">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="rounded-circle"
                      />
                    ) : (
                      <div className="placeholder-image rounded-circle">
                        <i className="fas fa-user"></i>
                      </div>
                    )}
                  </div>
                  <div className="quote-icon mb-3">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <blockquote className="blockquote mb-4">
                    <p className="mb-0">{testimonial.quote}</p>
                  </blockquote>
                  <div className="testimonial-author">
                    <h5 className="mb-1">{testimonial.name}</h5>
                    <p className="text-muted">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-navigation">
            <button
              className="nav-button prev-button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <i className="fas fa-long-arrow-alt-left"></i>
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot-button ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              className="nav-button next-button"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
