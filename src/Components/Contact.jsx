import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully!");
      form.reset();
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="p-10 md:p-24 bg-slate-900 text-white" id="contact">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">📞 Contact Me</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-400" />
            <span>+251973037309</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400" />
            <span>muazddu@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Dire Dawa, Ethiopia</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-500" />
            <a href="https://linkedin.com/in/yourprofile" className="underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/yourprofile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaTwitter className="text-sky-400" />
            <a href="https://twitter.com/yourhandle" className="underline hover:text-sky-300" target="_blank" rel="noopener noreferrer">
              twitter.com/yourhandle
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Required Web3Forms hidden access key field */}
          <input type="hidden" name="access_key" value="f864aec6-cbed-492e-a9fe-79fc25dd3a9d" />

          <div>
            <label className="block text-sm mb-1">Name</label>
            <input type="text" name="name" required className="w-full p-2 rounded bg-slate-800 border border-slate-700" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" required className="w-full p-2 rounded bg-slate-800 border border-slate-700" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows="4" required className="w-full p-2 rounded bg-slate-800 border border-slate-700" />
          </div>
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
            Send Messages
          </button>h
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
