import React from 'react';

const Papers = () => {
  const publications = {
    journals: [
      {
        title: "A Decision Framework With q-Rung Fuzzy Preferences for Ranking Barriers Affecting Clean Energy Utilization Within Healthcare Industry",
        doi: "10.1109/TEM.2024.3488325"
      },
      {
        title: "Demystifying the Stability and the Performance Aspects of CoCoSo Ranking Method under Uncertain Preferences",
        doi: "10.15388/24-INFOR565"
      },
      {
        title: "An Evidence-Based CoCoSo Framework with Double Hierarchy Linguistic Data for Viable Selection of Hydrogen Storage Methods",
        doi: "10.32604/cmes.2023.029438"
      },
      {
        title: "Selection of a viable blockchain service provider for data management within the internet of medical things: An MCDM approach to Indian healthcare",
        doi: "10.1016/j.ins.2023.119890"
      }
    ],
    conferences: [
      {
        title: "Fermatean fuzzy-based PCA CoCoSo framework to assess digital technologies in Health 4.0",
        doi: "10.1109/CINTI59972.2023.10382088"
      }
    ],
    bookChapters: [
      {
        title: "Cloud technology and fuzzy-based decision support systems driving sustainable development",
        doi: "10.1016/B978-0-443-23597-9.00002-0"
      }
    ]
  };

  return (
    <div className="bg-section-alt min-h-screen page-transition">
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Header */}
          <div className="w-full lg:w-1/3">
            <header className="text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-heading-content mb-4">
                Publications
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-color to-primary-color mx-auto lg:mx-0 rounded-full"></div>
            </header>
          </div>
          
          {/* Publications */}
          <div className="w-full lg:w-2/3">
            <div className="section-card mb-6">
              <p className="text-lg text-main-content">
                The recent papers have been listed here. Do refer to my <a href="Dhruva_Resume.pdf" className="font-semibold">CV</a> for more papers.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Journal Publications */}
              <div className="fade-in-up">
                <header className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-heading-content mb-2">
                    Journal Publications
                  </h2>
                  <div className="w-16 h-1 bg-primary-color rounded-full"></div>
                </header>
                <div className="space-y-4">
                  {publications.journals.map((pub, index) => (
                    <div key={index} className="publication-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h3 className="text-lg md:text-xl font-semibold text-main-content mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-base text-main-content">
                        DOI: <a href={`https://doi.org/${pub.doi}`} className="font-semibold hover:text-primary-light">
                          {pub.doi}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conference Proceedings */}
              <div className="fade-in-up">
                <header className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-heading-content mb-2">
                    Conference Proceedings
                  </h2>
                  <div className="w-16 h-1 bg-secondary-color rounded-full"></div>
                </header>
                <div className="space-y-4">
                  {publications.conferences.map((pub, index) => (
                    <div key={index} className="publication-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h3 className="text-lg md:text-xl font-semibold text-main-content mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-base text-main-content">
                        DOI: <a href={`https://doi.org/${pub.doi}`} className="font-semibold hover:text-primary-light">
                          {pub.doi}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Chapters */}
              <div className="fade-in-up">
                <header className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-heading-content mb-2">
                    Book Chapters
                  </h2>
                  <div className="w-16 h-1 bg-accent-color rounded-full"></div>
                </header>
                <div className="space-y-4">
                  {publications.bookChapters.map((pub, index) => (
                    <div key={index} className="publication-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h3 className="text-lg md:text-xl font-semibold text-main-content mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-base text-main-content">
                        DOI: <a href={`https://doi.org/${pub.doi}`} className="font-semibold hover:text-primary-light">
                          {pub.doi}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Papers; 