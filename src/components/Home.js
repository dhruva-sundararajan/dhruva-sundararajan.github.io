import React from 'react';

const Home = () => {
  return (
    <div className="bg-section min-h-screen page-transition">
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Section */}
          <div className="profile-section w-full lg:w-1/3 flex flex-col items-center">
            <div className="profile-photo-container mb-6 w-full flex justify-center">
              <img src="Dhruva_Photo.jpg" alt="Dhruva Sundararajan" className="profile-photo" />
            </div>
            <div className="name-container w-full text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Dhruva Sundararajan</h1>
              <div className="space-y-3">
                <p className="text-lg font-semibold">
                  <a href="Dhruva_Resume.pdf" className="btn-primary inline-block">
                    📄 Curriculum Vitae (CV)
                  </a>
                </p>
                <p className="text-lg font-semibold">
                  <a href="mailto:dhruvasundar@vt.edu" className="hover:text-primary-light">
                    dhruvasundar@vt.edu
                  </a>
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <a href="https://orcid.org/0000-0001-9059-0582" className="hover:text-primary-light">
                    ORCID
                  </a>
                  <a href="https://scholar.google.com/citations?user=YutjMrIAAAAJ&hl=en&oi=ao" className="hover:text-primary-light">
                    Google Scholar
                  </a>
                  <a href="https://www.scopus.com/authid/detail.uri?authorId=58739598000" className="hover:text-primary-light">
                    Scopus
                  </a>
                  <a href="https://www.webofscience.com/wos/author/record/JVN-3094-2024" className="hover:text-primary-light">
                    Web of Science
                  </a>
                  <a href="https://www.researchgate.net/profile/Sundararajan-Dhruva" className="hover:text-primary-light">
                    ResearchGate
                  </a>
                  <a href="https://www.linkedin.com/in/dhruva-sundararajan" className="hover:text-primary-light">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>        
          
          {/* Content Section */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Biography */}
            <div className="section-card fade-in-up">
              <header className="mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-heading-content">Biography</h1>
              </header>
              <p className="text-lg md:text-xl text-main-content leading-relaxed">
                I, Dhruva Sundararajan, am a PhD student at Virginia Tech, Blacksburg, USA. I have completed my MSc (Integrated) from Amrita Vishwa Vidyapeetham, Coimbatore, India. My research interests include Operations Research and Artificial Intelligence. My work includes several published articles, a conference proceeding and a book chapter, showing my dedication in using Data Science and Operations Research for practical solutions.
              </p>
            </div>

            {/* Education */}
            <div className="section-card fade-in-up">
              <header className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-heading-content">Education</h1>
              </header>
              <div className="space-y-6">
                <div className="experience-item">
                  <h3 className="text-2xl md:text-3xl font-bold text-main-content">
                    Virginia Tech, Blacksburg, VA, USA
                  </h3>
                  <h4 className="text-xl md:text-2xl font-semibold text-main-content mb-3">
                    PhD, Industrial and Systems Engineering (August 2024 - present)
                  </h4>
                  <div className="space-y-2 text-lg text-main-content">
                    <p><em>Academic Research Concentration:</em> Operations Research</p>
                    <p><em>Advisor:</em> Dr. Rohit Kannan</p>
                  </div>
                </div>
                <div className="experience-item">
                  <h3 className="text-2xl md:text-3xl font-bold text-main-content">
                    Amrita Vishwa Vidyapeetham, Coimbatore, India
                  </h3>
                  <h4 className="text-xl md:text-2xl font-semibold text-main-content">
                    MSc (Integrated) Data Science (July 2019 - June 2024)
                  </h4>
                </div>
              </div>
            </div>

            {/* Research Interests & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="section-card fade-in-up">
                <header className="mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-heading-content">Research Interests</h1>
                </header>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-main-content mb-2">Operations Research</h3>
                    <ul className="space-y-1 text-lg text-main-content">
                      <li>Linear and Nonlinear Optimization</li>
                      <li>Multi Criteria Decision Making (MCDM)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-main-content mb-2">Artificial Intelligence</h3>
                    <ul className="space-y-1 text-lg text-main-content">
                      <li>Machine Learning</li>
                      <li>Deep Learning</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="section-card fade-in-up">
                <header className="mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-heading-content">Skills</h1>
                </header>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-main-content mb-2">Programming Languages</h3>
                    <ul className="space-y-1 text-lg text-main-content">
                      <li>Python</li>
                      <li>R</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-main-content mb-2">Optimization Solvers</h3>
                    <ul className="space-y-1 text-lg text-main-content">
                      <li>HiGHS</li>
                      <li>Gurobi</li>
                      <li>SCIP</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 