import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-10 w-full">
      {/* Added text-center to center the title */}
      <h2 className="text-3xl font-bold text-purple-500 mb-5 text-center">Contact Me</h2>
      <div className="flex justify-center space-x-8">
        {/* LinkedIn Contact */}
        <a
          href="https://www.linkedin.com/in/kishan-ajudiya-82416825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-purple-500 hover:text-purple-400 transition duration-300"
        >
          <FaLinkedin />
        </a>

        {/* Email Contact */}
        <a
          href="mailto:ajudiyakishan7@gmail.com"
          className="text-3xl text-purple-500 hover:text-purple-400 transition duration-300"
        >
          <FaEnvelope />
        </a>

        {/* Phone Contact with rotation fixed */}
        <a
          href="tel:+917801892200"
          className="text-3xl text-purple-500 hover:text-purple-400 transition duration-300"
        >
          <FaPhone style={{ transform: 'rotate(90deg)' }} /> {/* Rotated 90 degrees */}
        </a>
      </div>

      {/* Display phone number below the icons */}
      <p className="text-center text-gray-400 mt-4">+91 7801892200</p>
    </section>
  );
};

export default Contact;
