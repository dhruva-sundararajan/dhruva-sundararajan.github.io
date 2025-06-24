import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      title: "Graduate Research Assistantship",
      institution: "Virginia Tech, Blacksburg, VA, USA",
      period: "Jan 2025 - present",
      description: "Currently involved in the following projects:",
      details: [
        "Learning to Predict Feasible Solutions for Quadratically Constrained Quadratic Problems (QCQPs) using Graph Neural Networks (GNNs)",
        "Learning for Global Optimization in AC-Optimal Power Flow (AC-OPF) Problems"
      ]
    },
    {
      title: "Graduate Teaching Assistantship",
      institution: "Virginia Tech, Blacksburg, VA, USA",
      period: "Aug 2024 - present",
      description: "Course: Theory of Organization"
    },
    {
      title: "Research Intern",
      institution: "IIT Madras, Chennai, India",
      period: "Jul 2023 - Jun 2024",
      description: "Guide: Dr. Sridharakumar Narasimhan (Department of Chemical Engineering)",
      details: [
        "Developed a shrinking horizon Model Predictive Control (MPC) for scheduling the distribution of water by minimizing the overall power and meeting all the demands.",
        "Contributed to building a Graph Neural Networks (GNN) for Column Generation (CG) problems that utilizes Mixed-Integer Linear Programming (MILP) for scheduling the distribution of water in a water network.",
        "Modernized an existing web application for sensor placement in water distribution networks by migrating it to a Python and HTML-based architecture, utilizing FastAPI for enhanced performance and scalability."
      ]
    },
    {
      title: "Project Intern",
      institution: "Calligo Technologies, Bangalore, India",
      period: "Aug 2022 - Jun 2023",
      details: [
        "Conducted research on Intermediate Representation (IR) of Graphs to optimize various deep neural network (DNN) architectures such as Resnet, VGG, and Mobilenet.",
        "Implemented IR graph concepts to enhance accuracy and reduce inference time for a range of deep learning models and architectures.",
        "Utilized GLOW compiler, a graph lowering compiler for deep learning architechtures, to implement these optimizations and improve overall performance, and benchmarked the performance of the GLOW compiler with other available Graph compilers such as TVM."
      ]
    }
  ];

  return (
    <div className="bg-section min-h-screen page-transition">
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Header */}
          <div className="w-full lg:w-1/3">
            <header className="text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-heading-content mb-4">
                Experiences
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary-color to-accent-color mx-auto lg:mx-0 rounded-full"></div>
            </header>
          </div>
          
          {/* Experience Items */}
          <div className="w-full lg:w-2/3">
            <div className="section-card mb-6">
              <p className="text-lg text-main-content">
                The recent experiences have been listed here. Do refer to my <a href="Dhruva_Resume.pdf" className="font-semibold">CV</a> for other experiences.
              </p>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="inline-block bg-secondary-color text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-main-content mt-2 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold text-main-content mb-2">
                    {exp.institution}
                  </h4>
                  {exp.description && (
                    <p className="text-lg text-main-content mb-3">
                      {exp.description}
                    </p>
                  )}
                  {exp.details && (
                    <ul className="space-y-2">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-lg text-main-content leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences; 