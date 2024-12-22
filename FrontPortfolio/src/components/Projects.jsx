import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Allo Media Auth",
      description: "A microservice-based authentication and authorization system for a delivery app",
      type: "Solo Project",
      teamSize: "1 members",
      duration: "1 week",
      tasks: [
        "Authenticated users with JWT tokens",
        "Verified user roles and permissions",
        "OTP verification and password reset functionality",
      ],
      technologies: [
        { name: "Node.js(express)", type: "backend" },
        { name: "JWT", type: "Token Management" },
        
      ]
    },
    {
      title: "Biblio",
      description: "A library management focused on practicing cloud and microservices architectures",
      type: "Solo Project",
      teamSize: "1 member",
      duration: "4 weeks",
      tasks: [
        "implemented of AWS cognito authentication system",
        "Implemented of AWS S3 for static frontend deployment",
        "implemented of AWS API Gateway for comunication and security between services",
        "NestJS for backend",
        "Atlas mongoDB for database",
      ],
      technologies: [
        { name: "NestJS", type: "Backend" },
        { name: "AWS", type: "Cloud" },
        { name: "MongoDB", type: "Database" },
        { name: "ReactJS", type: "frontend" },
      ]
    },
  ];

  return (
    <section id="projects" className='bg-gray-900 text-white'  style={{ fontFamily: 'monospace' }}>
    <div className="min-h-screen w-9/12 mx-auto text-white pt-20 pb-20">
      <h2 className="text-3xl font-bold mb-8 text-green-500 font-mono">
        $ echo "Projects"<span className="animate-pulse">_</span>
      </h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
            
            {/* Project card content */}
            <div className="relative bg-gray-900 rounded-lg p-6 transition duration-300 group-hover:bg-gray-800">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white font-mono mb-2">{project.title}</h3>
                <p className="text-gray-300 font-mono">{project.description}</p>
              </div>
              
              {/* Project details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="space-y-1">
                  <p className="text-green-500 font-mono text-sm">Type</p>
                  <p className="text-white font-mono">{project.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-green-500 font-mono text-sm">Team Size</p>
                  <p className="text-white font-mono">{project.teamSize}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-green-500 font-mono text-sm">Duration</p>
                  <p className="text-white font-mono">{project.duration}</p>
                </div>
              </div>
              
              {/* Tasks */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white font-mono mb-3">$ Key Tasks</h4>
                <ul className="space-y-2">
                  {project.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start space-x-2">
                      <span className="text-green-500 font-mono">→</span>
                      <span className="text-gray-300 font-mono">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="text-lg font-bold text-white font-mono mb-3">$ Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full font-mono border border-green-500/30 flex items-center space-x-2"
                    >
                      <span className="text-green-400">{tech.name}</span>
                      <span className="text-gray-500 text-sm">• {tech.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;