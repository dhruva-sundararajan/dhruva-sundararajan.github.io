import React from 'react';

const Experiences = () => {
  return (
    <section id="experiences" className="bg-section">
      <div className="container mx-auto px-8 py-16 md:px-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex flex-col md:mr-12">
            <header className="py-2 text-center md:text-center">
              <h1 className="text-4xl font-bold text-heading-content">Experiences</h1>
            </header>
          </div>
          <div className="w-full flex flex-col md:ml-6">
            <article className="mb-2 mt-2">
              <p className="text-l font-semi-bold text-main-content py-2">
                The recent experiences have been listed here. Do refer to my <a href="Dhruva_Resume.pdf" className="text-blue-700 hover:text-blue-900">CV</a> for other experiences.
              </p>
              <article className="mb-2 mt-2">
                <article className="mb-2 mt-2">
                  <h3 className="text-2xl font-bold text-main-content">
                    Graduate Research Assistantship, Virginia Tech, Blacksburg, VA, USA (Jan 2025 - present)
                  </h3>
                  <p className="text-xl font-semi-bold text-main-content py-2">
                    Currently involved in the following projects:
                  </p>
                  <ul className="text-xl font-semi-bold text-main-content" style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                    <li>Learning to Predict Feasible Solutions for Quadratically Constrained Quadratic Problems (QCQPs) using Graph Neural Networks (GNNs)</li>
                    <li>Learning for Global Optimization in AC-Optimal Power Flow (AC-OPF) Problems</li>
                  </ul>
                </article>
              <article className="mb-2 mt-2">
                <h3 className="text-2xl font-bold text-main-content">
                  Graduate Teaching Assistantship, Virginia Tech, Blacksburg, VA, USA (Aug 2024 - present)
                </h3>
                <p className="text-xl font-semi-bold text-main-content py-2">
                  <strong>Course:</strong> Theory of Organization
                </p>
              </article>
              <h3 className="text-2xl font-bold text-main-content">
                Research Intern - IIT Madras, Chennai, India (Jul 2023 - Jun 2024)
              </h3>
              <p className="text-xl font-semi-bold text-main-content py-2">
                <strong>Guide:</strong> Dr. Sridharakumar Narasimhan <em>(Department of Chemical Engineering)</em>
              </p>
              <ul className="text-xl font-semi-bold text-main-content" style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                <li>
                  Developed a shrinking horizon Model Predictive Control (MPC) for scheduling the distribution of water by minimizing the overall power and meeting all the demands.
                </li>
                <li>
                  Contributed to building a Graph Neural Networks (GNN) for Column Generation (CG) problems that utilizes Mixed-Integer Linear Programming (MILP) for scheduling the distribution of water in a water network.
                </li>
                <li>
                  Modernized an existing web application for sensor placement in water distribution networks by migrating it to a Python and HTML-based architecture, utilizing FastAPI for enhanced performance and scalability.
                </li>
              </ul>
            </article>
            <article className="mb-2 mt-2">
              <h3 className="text-2xl font-bold text-main-content">
                Project Intern - Calligo Technologies, Bangalore, India (Aug 2022 - Jun 2023)
              </h3>
              <ul className="text-xl font-semi-bold text-main-content" style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                <li>
                  Conducted research on Intermediate Representation (IR) of Graphs to optimize various deep neural network (DNN) architectures such as Resnet, VGG, and Mobilenet.
                </li>
                <li>
                  Implemented IR graph concepts to enhance accuracy and reduce inference time for a range of deep learning models and architectures.
                </li>
                <li>
                  Utilized GLOW compiler, a graph lowering compiler for deep learning architechtures, to implement these optimizations and improve overall performance, and benchmarked the performance of the GLOW compiler with other available Graph compilers such as TVM.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences; 