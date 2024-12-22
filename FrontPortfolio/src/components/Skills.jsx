import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "border-orange-500",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "border-blue-500",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "border-yellow-500",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "border-cyan-500",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "border-gray-500",
    },
    {
      name: "NestJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original-wordmark.svg",
      color: "border-red-500",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "border-green-500",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "border-blue-400",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      color: "border-red-600",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "border-orange-400",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "border-purple-500",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "border-blue-500",
      level: "Intermediate"
    }
  ];

  return (
    <>
      <div className='w-full bg-gray-900'>
        <div className="w-9/12 mx-auto p-3 bg-gray-900 ">
          <h2 className="text-3xl font-bold mb-8 text-green-500 font-mono">
          Console.log(Skills())<span className="animate-pulse">_</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-300"></div>

                {/* Card content */}
                <div className="relative bg-gray-900 rounded-lg p-4 transition duration-300 group-hover:bg-gray-800">
                  <div className="flex flex-col items-center space-y-3">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="text-lg font-bold text-white font-mono">{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;