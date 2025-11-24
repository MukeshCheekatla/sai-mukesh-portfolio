import React, { useState } from 'react';
import { Send, Terminal, AlertCircle } from 'lucide-react';
import { RESUME_DATA } from '../data/constants.js';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Error: Identity (Name) required.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Error: Return address (Email) required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Error: Invalid syntax.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Error: Payload (Message) cannot be empty.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Message transmitted successfully.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <section id="contact" className="scroll-mt-0">
      <div className="border-t border-border pt-8">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Section */}
          <div className="order-2 md:order-1">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              05. // Connect
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6">Get In Touch</h2>

            <p className="text-slate-400 mb-8">
              Currently looking for new opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="font-mono text-sm space-y-2 overflow-x-auto">
              <p className="text-secondary whitespace-nowrap">
                <span className="text-primary">const</span> email ={' '}
                <span className="text-white">"{RESUME_DATA.email}"</span>;
              </p>

              <p className="text-secondary whitespace-nowrap">
                <span className="text-primary">const</span> location ={' '}
                <span className="text-white">"India"</span>;
              </p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-surface border border-border p-1 rounded-lg order-1 md:order-2">
            <div className="bg-background border-b border-border px-4 py-2 flex items-center gap-2">
              <Terminal size={14} className="text-secondary" />
              <span className="text-xs text-secondary font-mono">contact_form.sh</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">

              {/* Name */}
              <div>
                <div className="flex justify-between items-end mb-1">
                  <label className="text-xs font-mono text-primary"> {'>'} NAME</label>
                  {errors.name && (
                    <span className="text-red-500 text-[10px] font-mono flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.name}
                    </span>
                  )}
                </div>

                <input
                  type="text"
                  className={`w-full bg-background border p-3 text-white font-mono text-sm focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-border focus:border-primary'
                  }`}
                  placeholder="_"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <div className="flex justify-between items-end mb-1">
                  <label className="text-xs font-mono text-primary">{'>'} EMAIL</label>
                  {errors.email && (
                    <span className="text-red-500 text-[10px] font-mono flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.email}
                    </span>
                  )}
                </div>

                <input
                  type="email"
                  className={`w-full bg-background border p-3 text-white font-mono text-sm focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-border focus:border-primary'
                  }`}
                  placeholder="_"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-end mb-1">
                  <label className="text-xs font-mono text-primary">{'>'} MESSAGE</label>
                  {errors.message && (
                    <span className="text-red-500 text-[10px] font-mono flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </span>
                  )}
                </div>

                <textarea
                  rows={4}
                  className={`w-full bg-background border p-3 text-white font-mono text-sm focus:outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-border focus:border-primary'
                  }`}
                  placeholder="_"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              {/* Submit */}
              <button className="w-full bg-white text-black font-bold py-3 hover:bg-primary hover:text-white transition-colors font-mono uppercase flex items-center justify-center gap-2 cursor-pointer border border-transparent hover:border-white">
                Execute <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
