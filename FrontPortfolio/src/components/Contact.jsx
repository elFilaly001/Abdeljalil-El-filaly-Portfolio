import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); 
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    }
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    console.log('Sending email...');
    console.log();
    

    emailjs.sendForm(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        setStatus('success');
        console.log('Email sent successfully');
    }, (error) => {
        setStatus('error');
        console.log('Failed to send email:', error);
    });
  };

  const handleChange = (e) => {
    const { name,value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(name +" "+ value);
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-green-500 font-mono">
          $ echo "Contact Me"<span className="animate-pulse">_</span>
        </h2>

        <div className="relative group">
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-300"></div>

          {/* Form container */}
          <div className="relative bg-gray-900 rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-green-500 font-mono mb-2">
                  $ user.name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 rounded border ${
                    errors.name ? 'border-red-500' : 'border-green-500/30'
                  } text-white font-mono p-3 focus:outline-none focus:border-green-500 transition duration-200`}
                  placeholder="FullName..."
                />
                {errors.name && (
                  <p className="text-red-500 font-mono text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-green-500 font-mono mb-2">
                  $ user.email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 rounded border ${
                    errors.email ? 'border-red-500' : 'border-green-500/30'
                    } text-white font-mono p-3 focus:outline-none focus:border-green-500 transition duration-200`}
                    placeholder="example@example.com"
                    />
                {errors.email && (
                  <p className="text-red-500 font-mono text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-green-500 font-mono mb-2">
                  $ user.message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-gray-800 rounded border ${
                    errors.message ? 'border-red-500' : 'border-green-500/30'
                    } text-white font-mono p-3 focus:outline-none focus:border-green-500 transition duration-200`}
                    placeholder="Your message here..."
                    />
                {errors.message && (
                  <p className="text-red-500 font-mono text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-mono py-3 px-6 rounded flex items-center justify-center space-x-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="text-green-500 font-mono text-center">
                  Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-500 font-mono text-center">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
              </>
  );
};

export default Contact;
