import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="p-10 md:p-24 bg-slate-900 text-white">
    <section id='contact'>  <h1 className="text-2xl md:text-4xl font-bold mb-10">📞 Contact Me</h1></section>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-400" />
            <span>+251973037309</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400" />
            <span>obsa@gmail.com</span>
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
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input type="text" className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring focus:ring-blue-500" rows="4" />
          </div>
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
