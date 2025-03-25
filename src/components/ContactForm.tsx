"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Adınız Soyadınız *"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="E-posta Adresiniz *"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Telefon Numaranız"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Konu *"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          rows={5}
          placeholder="Mesajınız *"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="privacyCheck"
          required
          checked={formData.privacy}
          onChange={(e) =>
            setFormData({ ...formData, privacy: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="privacyCheck">
          Kişisel verilerimin işlenmesini kabul ediyorum.
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Gönder
      </button>
    </form>
  );
}
