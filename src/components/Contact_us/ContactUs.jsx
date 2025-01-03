import React from "react";

export default function ContactUs() {
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="contact-us-section">
        <div className="benefit-heading">
          <h2>Contact Us</h2>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="form-input"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="tel"
                  id="contact"
                  placeholder="Your phone number"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="issue" className="form-label">
                  Describe your issue
                </label>
                <textarea
                  id="issue"
                  placeholder="Describe your issue"
                  rows="4"
                  className="form-textarea"
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>

          <div className="contact-info-container">
            <div className="info-heading">
              <h4>Contact Info</h4>
            </div>
            <div className="info-dets" style={{ marginTop: "30px" }}>
              <div className="info-icon">
                <i className="hgi-stroke hgi-telephone" />
              </div>
              <div className="info-con">
                <span>+91 9517292555</span>
              </div>
            </div>
            <div className="info-dets">
              <div className="info-icon">
                <i className="hgi-stroke hgi-mail-at-sign-01" />
              </div>
              <div className="info-con">
                <span>info@maheshcarpets.com</span>
              </div>
            </div>
            <div className="info-dets">
              <div className="info-icon">
                <i className="hgi-stroke hgi-location-03" />
              </div>
              <div className="info-con">
                <span>Jagatpur GT Road Varanasi 221302 Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
