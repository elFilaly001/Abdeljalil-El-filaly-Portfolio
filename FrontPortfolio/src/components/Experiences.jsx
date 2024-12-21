import React from 'react';

function Experiences() {
  const experiences = [
    {
      title: "Internship at Zaim Digital",
      duration: "June 2024 - august 2024",
      description: "Designing and implementing a process using Talend to generate individual sheets for clients' subfolders and their corresponding bills from a structured database. These sheets are automatically created and organized, then securely stored in each client’s designated Google Drive folder, ensuring seamless access and efficient document management.",
      skills: ["Talend", "MySQL", "PowerBI"]
    },
    {
      title: "Inernship at Kamal acsenceure",
      duration: " April 2022 - May 2022",
      description: "Developing a desktop application designed to efficiently manage stock inventory and client billing. The application provides features for tracking stock levels, generating and managing client invoices, and streamlining the overall management process to enhance productivity and accuracy",
      skills: ["JAVA" , "Oracle SQL"]
    }
  ];
  return (
    <section id="experiences" className='bg-gray-900 text-white'  style={{ fontFamily: 'monospace' }}>
      <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-green-500 font-mono">
        Select * From Experiences<span className="animate-pulse">_</span>
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="relative group"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
            
            {/* Card content */}
            <div className="relative bg-gray-900 rounded-lg p-6 transition duration-300 group-hover:bg-gray-800">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white font-mono">{exp.title}</h3>
                <span className="text-sm text-gray-400 font-mono">{exp.duration}</span>
              </div>
              
              <p className="text-gray-300 mb-4 font-mono leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm font-mono border border-green-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Experiences;
