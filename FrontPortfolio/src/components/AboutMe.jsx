import React, { useState, useEffect } from 'react';
import profileImage from '/src/assets/images/7O2A0165-removebg-preview.png';


function AboutMe() {

  const texts = [
    'Web Developer',
    'MERN Stack',
    'El Filaly Abdeljalil'
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === fullText) {
          setTypingSpeed(2000); // Pause at the end
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(100);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, typingSpeed]);

  return (
    <section className="flex md:flex-row bg-gray-900 min-h-screen overflow-hidden md:items-center"  style={{ fontFamily: 'monospace' }}>
      <div className="w-2/3 flex items-center justify-center ml-10">
        <div className="font-mono">
          <span className="text-green-500">$ </span>
          <span className="text-white text-4xl font-bold">
            {currentText}
          </span>
          <span className="text-white text-4xl animate-pulse">_</span>
        </div>
      </div>
      <div className="flex items-center justify-start hidden md:block mt-10 mr-10">
          <div className="relative group">
            {/* Outer border with gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
            
            {/* Inner container */}
            <div className="relative bg-gray-900 rounded-lg p-1">
              <img 
                src={profileImage} 
                alt="Your Name" 
                className="rounded-lg w-full h-auto transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
    </section >
  );
}

export default AboutMe;