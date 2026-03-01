import React, { useState } from "react";
import "../index.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';


function Contact() {

  const [form, setForm] = useState({
    name:    "",
    email:   "",
    subject: "",
    message: ""
  });

  // Shows success message after form is submitted
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Tracks which field is currently focused (for highlight effect)
  const [focused, setFocused] = useState("");

  // ── Handle Input Change ───────────────────────────────────
  // Updates only the field that changed, keeps the rest
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ── Handle Submit ─────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("access_key", "acb8e082-9041-411b-b7cf-1cac9e764990");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject || "New Contact Form Submission");
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ── Contact Info Data ─────────────────────────────────────
  const contactInfo = [
    { icon: "📧", label: "Email",       value: "rushikesht686@gmail.com" },
    { icon: "📱", label: "Phone",       value: "+91 9209218801"        },
    { icon: "📍", label: "Location",    value: "Mumbai-MH, India"     },
    { icon: "🕐", label: "Available",   value: "Mon – Sat, 9AM – 7PM"  },
  ];

  // ── Social Links ──────────────────────────────────────────
  const socials = [
    { label: "GitHub", icon: <GitHubIcon />, href: "https://github.com/Rushikesh-Thakare"
    },
    { label: "LinkedIn", icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/rushikesh-thakare-a58526321" },
    { label: "Instagram", icon: <InstagramIcon />,  href: "https://www.instagram.com/rushii_thakare/"  },
    { label: "LeetCode", icon: <CodeIcon />, href: "https://leetcode.com/u/rushi_thakare/" },
    { label: "Facebook", icon: <FacebookIcon />, href: "https://www.facebook.com/profile.php?id=61559317719064" },
  ];

  return (
    <section id="contact" className="contact-section">

      {/* ── Section Heading ─────────────────────────────────── */}
      <h3 className="contact-label">// Contact Me</h3>
      <h2 className="contact-heading">Get In <span>Touch</span></h2>
      <p className="contact-desc">
        Have a project, internship opportunity, or just want to say hi?
        I'd love to hear from you!
      </p>

      {/* ── Two Column Grid ─────────────────────────────────── */}
      <div className="contact-grid">

        {/* ════════════════════════════════════════
            LEFT — Info Cards + Socials
        ════════════════════════════════════════ */}
        <div className="contact-info-side">

          {/* Info Cards */}
          {contactInfo.map(({ icon, label, value }) => (
            <div className="contact-info-card" key={label}>
              <div className="contact-info-icon">{icon}</div>
              <div>
                <div className="contact-info-label">{label}</div>
                <div className="contact-info-value">{value}</div>
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="contact-socials">
            <p className="contact-socials-title">// Connect with me on Social Media</p>
            <div className="contact-socials-row">
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className={`contact-social-btn ${label.toLowerCase()}`}
                >
                  {icon}
                  <span className="contact-social-label">{label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
        


        {/* 
            RIGHT — Contact Form
        */}
        <form className="contact-form" onSubmit={handleSubmit} >

          {/* Success Message — shown after submit */}
          <div className={`contact-success ${submitted ? "show" : ""}`}>
             Message sent! I'll get back to you soon.
            </div>

          {/* Name + Email — side by side */}
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                required
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={()  => setFocused("")}
                className={focused === "name" ? "input-focused" : ""}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Your Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                required
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={()  => setFocused("")}
                className={focused === "email" ? "input-focused" : ""}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="contact-field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Internship Opportunity / Project Collab"
              value={form.subject}
              onChange={handleChange}
              onFocus={() => setFocused("subject")}
              onBlur={()  => setFocused("")}
              className={focused === "subject" ? "input-focused" : ""}
            />
          </div>

          {/* Message */}
          <div className="contact-field">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Hey Rushikesh, I'd love to work with you on..."
              value={form.message}
              required
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={()  => setFocused("")}
              className={focused === "message" ? "input-focused" : ""}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="contact-submit-btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;