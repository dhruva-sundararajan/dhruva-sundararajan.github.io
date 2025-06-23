import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-section">
      <div className="container mx-auto px-8 py-16 md:px-16">
        <div className="flex flex-col md:flex-row">
          <div className="profile-section w-full md:w-1/3 flex flex-col items-center md:items-center md:mr-12">
            <div className="profile-photo-container mb-2 w-full flex justify-center md:justify-center">
              <img src="Dhruva_Photo.jpg" alt="Dhruva Sundararajan" className="profile-photo w-full md:w-auto" />
            </div>
            <div className="name-container mb-4 w-full text-center md:text-center">
              <h1 className="text-2xl font-bold text-main-content">Dhruva Sundararajan</h1>
              <p className="mt-1 mb-1 text-l font-bold">
                <a href="Dhruva_Resume.pdf" className="text-blue-700 hover:text-blue-900"> Curriculum Vitae (CV)</a>
              </p>
              <p className="mb-1 text-l font-bold">
                <a href="mailto:dhruva.sundararajan@gmail.com" className="text-blue-700 hover:text-blue-900"> dhruva.sundararajan@gmail.com</a>
              </p>
              <p className="mt-1 mb-1 text-l font-bold">
                <a href="https://orcid.org/0000-0001-9059-0582" className="text-blue-700 hover:text-blue-900">ORCID</a>
              </p>
              <p className="mt-1 mb-1 text-l font-bold">
                <a href="https://scholar.google.com/citations?user=YutjMrIAAAAJ&hl=en&oi=ao" className="text-blue-700 hover:text-blue-900">Google Scholar</a>
              </p>
              <p className="mt-1 mb-1 text-l font-bold">
                <a href="https://www.scopus.com/authid/detail.uri?authorId=58739598000" className="text-blue-700 hover:text-blue-900">Scopus</a>
              </p>
              <p className="mt-1 mb-1 text-l font-bold">
                <a href="https://www.webofscience.com/wos/author/record/JVN-3094-2024" className="text-blue-700 hover:text-blue-900">Web of Science</a>
              </p>
              <p className="mt-1 mb-1 text-l font-bold">
                <a href="https://www.researchgate.net/profile/Sundararajan-Dhruva" className="text-blue-700 hover:text-blue-900">ResearchGate</a>
              </p>
              <p className="mt-1 mb-2 text-l font-bold">
                <a href="https://www.linkedin.com/in/dhruva-sundararajan" className="text-blue-700 hover:text-blue-900">Linkedin</a>
              </p>
            </div>
          </div>        
          <div className="w-full md:ml-6">
            <div className="py-4"> 
              <header className="py-2">
                <h1 className="text-4xl font-bold text-heading-content">Biography</h1>
              </header>
              <p className="mt-4 mb-4 text-xl font-semi-bold text-main-content">
                I, Dhruva Sundararajan, am a PhD student at Virginia Tech, Blacksburg, USA. I have completed my MSc (Integrated) from Amrita Vishwa Vidyapeetham, Coimbatore, India. My research interests include Operations Research and Artificial Intelligence. My work includes several published articles, a conference proceeding and a book chapter, showing my dedication in using Data Science and Operations Research for practical solutions.
              </p>
            </div>
            <div className="py-4">
              <header className="py-2">
                <h1 className="text-4xl font-bold text-heading-content">Education</h1>
              </header>
              <div className="py-2">
                <h3 className="text-3xl font-bold text-main-content">Virginia Tech, Blacksburg, VA, USA</h3>
                <h4 className="text-2xl font-semi-bold text-main-content">PhD, Industrial and Systems Engineering (August 2024 - present)</h4>
                <p className="mb-2 mt-2 text-xl font-semi-bold text-main-content">
                  <em>Academic Research Concentration:</em> Operations Research
                </p>
                <p className="mb-2 mt-2 text-xl font-semi-bold text-main-content">
                  <em>Advisor:</em> Dr. Rohit Kannan
                </p>
              </div>
              <div className="py-2">
                <h3 className="text-3xl font-bold text-main-content">Amrita Vishwa Vidyapeetham, Coimbatore, India</h3>
                <h4 className="text-2xl font-semi-bold text-main-content">MSc (Integrated) Data Science (July 2019 - June 2024)</h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex flex-col py-4">
                <header className="py-2">
                  <h1 className="text-4xl font-bold text-heading-content">Research Interests</h1>
                </header>
                <ul>
                  <li>
                    <p className="mt-2 text-xl font-bold text-main-content">Operations Research</p>
                    <ul className="mb-2 text-xl font-semi-bold text-main-content" style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                      <li>Optimization</li>
                      <li>Multi Criteria Decision Making (MCDM)</li>
                    </ul>
                  </li>
                  <li>
                    <p className="mt-2 text-xl font-bold text-main-content">Artificial Intelligence</p>
                    <ul className="mb-2 text-xl font-semi-bold text-main-content" style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                      <li>Machine Learning</li>
                      <li>Deep Learning</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex flex-col py-4">
                <header className="py-2">
                  <h1 className="text-4xl font-bold text-heading-content">Skills</h1>
                </header>
                <ul>
                  <li>
                    <p className="mt-2 text-xl font-bold text-main-content">Programming Languages:</p>
                    <ul className="mb-2 text-xl font-semi-bold text-main-content" style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                      <li>Python</li>
                      <li>R</li>
                    </ul>
                  </li>
                  <li>
                    <p className="mt-2 text-xl font-bold text-main-content">Optimization Solvers:</p>
                    <ul className="mb-2 text-xl font-semi-bold text-main-content" style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                      <li>HiGHS</li>
                      <li>Gurobi</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 