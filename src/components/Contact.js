import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaArrowRight } from 'react-icons/fa';
import { Mail, MessageSquareText, User } from 'lucide-react';

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zs9iler',
      'template_z6sbczd',
      form.current,
      'Z0BHsra5m-_xSkOYy'
    ).then(
      (result) => {
        props.showAlert("Message sent successfully", "success");
        form.current.reset();
      },
      (error) => {
        props.showAlert("Something went wrong", "error" + error.text);
      }
    );
  };

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-300 mb-8 animate-pulse">
          Contact Me
        </h2>
        <p className="text-slate-400 mb-10 md:text-lg">
          Have a question or want to work together? Fill out the form below and I'll get back to you.
        </p>

        <form
  ref={form}
  onSubmit={sendEmail}
  className="grid grid-cols-1 gap-6 text-left animate-fade-up duration-700 border border-green-400 rounded-xl p-6 bg-white/10 max-w-3xl mx-auto"
>
          {/* Name Field with Icon */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500">
              <User size={20} />
            </span>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full pl-12 p-4 bg-white border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-black"
            />
          </div>

          {/* Email Field with Icon */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500">
              <Mail size={20} />
            </span>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full pl-12 p-4 bg-white border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-black"
            />
          </div>

          {/* Message Field with Icon */}
          <div className="relative">
            <span className="absolute left-4 top-4 text-green-500">
              <MessageSquareText size={20} />
            </span>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full pl-12 p-4 bg-white border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none text-black"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              className="relative inline-flex items-center justify-center px-10 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
            >
              <span
                className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-700 rounded-full group-hover:w-56 group-hover:h-56"
              ></span>
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-full opacity-100 object-stretch"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-cover w-full h-full"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  ></path>
                </svg>
              </span>
              <span
                className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
              ></span>
              <span className="relative text-base font-semibold flex">
                send message <FaArrowRight className='ml-2 mt-1.5'/>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
