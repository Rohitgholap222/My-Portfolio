import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    // Validate environment variables
    if (!import.meta.env.VITE_EMAIL_SERVICE || !import.meta.env.VITE_EMAIL_TEMPLATE || !import.meta.env.VITE_EMAIL_PUBLIC_KEY) {
      setErrorMsg("Email configuration is missing. Please contact the site owner.");
      setLoading(false);
      console.error("EmailJS configuration missing:", {
        service: import.meta.env.VITE_EMAIL_SERVICE,
        template: import.meta.env.VITE_EMAIL_TEMPLATE,
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY
      });
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMsg("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSuccessMsg(""), 5000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS error:", error);
          setErrorMsg("Failed to send the message. Please try again.");
          setTimeout(() => setErrorMsg(""), 5000);
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-josefin font-bold text-black mb-4">Contact <span className="text-primary">Me!</span></h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div data-aos="fade-right">
          <h3 className="text-3xl font-josefin font-bold text-black mb-8">Let's Talk</h3>
          <p className="text-gray-600 font-josefin text-lg mb-10 leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out to me. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary text-xl border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-sm font-josefin font-bold text-gray-400 uppercase tracking-wider">Phone</h4>
                <p className="text-lg font-josefin font-bold text-black">+91 XXXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary text-xl border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-sm font-josefin font-bold text-gray-400 uppercase tracking-wider">Email</h4>
                <p className="text-lg font-josefin font-bold text-black">rohitgholap045@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary text-xl border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-josefin font-bold text-gray-400 uppercase tracking-wider">Address</h4>
                <p className="text-lg font-josefin font-bold text-black">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100" data-aos="fade-left">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-josefin font-bold text-gray-700 ml-1">Your Name</label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-josefin font-semibold text-black"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-josefin font-bold text-gray-700 ml-1">Your Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-josefin font-semibold text-black"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-josefin font-bold text-gray-700 ml-1">Your Message</label>
              <textarea
                required
                name="message"
                placeholder="How can I help you?"
                rows={4}
                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-josefin font-semibold text-black resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              disabled={loading}
              className={`w-full py-3.5 rounded-xl font-josefin font-bold text-base shadow-xl transition-all transform hover:-translate-y-1 ${loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-primary"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {successMsg && (
              <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-josefin font-bold animate-fade-in">
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-josefin font-bold animate-fade-in">
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

