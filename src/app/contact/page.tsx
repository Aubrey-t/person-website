"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      await emailjs.send(
        'service_1lq5y8s',
        'template_c3fw2vh',
        {
          email: form.email,
          name: form.name,
          title: 'Contact Form',
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '2x3KMShezT-HsYc3d'
      );
      
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error('Error sending email:', err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#07190e] flex flex-col items-center pt-24 px-2">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 mb-16">
        {/* Left: Contact Information */}
        <div className="flex-1 flex flex-col gap-8 justify-center self-end">
          <h2 className="text-4xl font-extrabold text-green-200 mb-2">Get In Touch</h2>
          <p className="text-green-100/90 mb-6 max-w-md">Interested in working together or have questions about my work? Feel free to reach out!</p>
          <div className="flex flex-col gap-6 bg-[#10241b] rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="flex items-center gap-4 mb-2">
              <FaEnvelope className="text-green-400 text-2xl" />
              <div>
                <div className="font-bold text-green-100">Email</div>
                <div className="text-green-200 text-sm">tafadzwa@tsambatare.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <FaPhone className="text-green-400 text-2xl" />
              <div>
                <div className="font-bold text-green-100">Phone</div>
                <div className="text-green-200 text-sm">+1 437 9742368</div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <FaLinkedin className="text-green-400 text-2xl" />
              <div>
                <div className="font-bold text-green-100">LinkedIn</div>
                <div className="text-green-200 text-sm">linkedin.com/in/aubrey96</div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <FaMapMarkerAlt className="text-green-400 text-2xl" />
              <div>
                <div className="font-bold text-green-100">Location</div>
                <div className="text-green-200 text-sm">Toronto, Ontario, Canada</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 flex flex-col gap-8 justify-center self-end">
          <div className="bg-[#10241b] rounded-2xl shadow-xl p-8 self-end w-full max-w-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            {submitted ? (
              <div className="text-green-300 font-semibold text-lg">Thank you for your message! I&apos;ll get back to you soon.</div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                {error && (
                  <div className="text-red-400 font-semibold text-sm mb-2">{error}</div>
                )}
                <label className="text-green-100 font-semibold">Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full bg-[#07190e] border border-green-900 rounded px-4 py-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </label>
                <label className="text-green-100 font-semibold">Email
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-1 w-full bg-[#07190e] border border-green-900 rounded px-4 py-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </label>
                <label className="text-green-100 font-semibold">Message
                  <textarea
                    placeholder="Your message..."
                    className="mt-1 w-full bg-[#07190e] border border-green-900 rounded px-4 py-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[120px]"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 px-6 py-2 rounded bg-green-700 text-white font-semibold hover:bg-green-600 transition shadow focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 12h8m0 0l-4-4m4 4l-4 4" /></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 