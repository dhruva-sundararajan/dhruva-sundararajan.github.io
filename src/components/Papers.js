import React from 'react';

const Papers = () => {
  return (
    <section id="papers" className="bg-section-alt">
      <div className="container mx-auto px-8 py-16 md:px-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex flex-col md:mr-12">
            <header className="py-2 text-center md:text-center">
              <h1 className="text-4xl font-bold text-heading-content">Publications</h1>
            </header>
          </div>
          <div className="w-full flex flex-col md:ml-6">
            <p className="text-l font-semi-bold text-main-content py-2">
              The recent papers have been listed here. Do refer to my <a href="Dhruva_Resume.pdf" className="text-blue-700 hover:text-blue-900">CV</a> for more papers.
            </p>
            <div className="py-2">
              <header>
                <h1 className="text-3xl font-bold text-heading-content">Journal Publications</h1>
              </header>
              <article className="mb-2 mt-2">
                <h3 className="text-xl font-semi-bold text-main-content">
                  A Decision Framework With q-Rung Fuzzy Preferences for Ranking Barriers Affecting Clean Energy Utilization Within Healthcare Industry
                </h3>
                <p className="text-l font-semi-bold text-main-content">
                  DOI: <a href="https://doi.org/10.1109/TEM.2024.3488325" className="text-blue-700 hover:text-blue-900">10.1109/TEM.2024.3488325</a>
                </p>
              </article>
              <article className="mb-2 mt-2">
                <h3 className="text-xl font-semi-bold text-main-content">
                  Demystifying the Stability and the Performance Aspects of CoCoSo Ranking Method under Uncertain Preferences
                </h3>
                <p className="text-l font-semi-bold text-main-content">
                  DOI: <a href="https://doi.org/10.15388/24-INFOR565" className="text-blue-700 hover:text-blue-900">10.15388/24-INFOR565</a>
                </p>
              </article>
              <article className="mb-2 mt-2">
                <h3 className="text-xl font-semi-bold text-main-content">
                  An Evidence-Based CoCoSo Framework with Double Hierarchy Linguistic Data for Viable Selection of Hydrogen Storage Methods
                </h3>
                <p className="text-l font-semi-bold text-main-content">
                  DOI: <a href="https://doi.org/10.32604/cmes.2023.029438" className="text-blue-700 hover:text-blue-900">10.32604/cmes.2023.029438</a>
                </p>
              </article>
              <article className="mb-2 mt-2">
                <h3 className="text-xl font-semi-bold text-main-content">
                  Selection of a viable blockchain service provider for data management within the internet of medical things: An MCDM approach to Indian healthcare
                </h3>
                <p className="text-l font-semi-bold text-main-content">
                  DOI: <a href="https://doi.org/10.1016/j.ins.2023.119890" className="text-blue-700 hover:text-blue-900">10.1016/j.ins.2023.119890</a>
                </p>
              </article>
            </div>
            <div className="py-2">
              <header>
                <h1 className="text-3xl font-bold text-heading-content">Conference Proceedings</h1>
              </header>
              <article className="mb-2 mt-2">
                <h3 className="text-xl font-semi-bold text-main-content">
                  Fermatean fuzzy-based PCA CoCoSo framework to assess digital technologies in Health 4.0
                </h3>
                <p className="text-l font-semi-bold text-main-content">
                  DOI: <a href="https://doi.org/10.1109/CINTI59972.2023.10382088" className="text-blue-700 hover:text-blue-900">10.1109/CINTI59972.2023.10382088</a>
                </p>
              </article>
            </div>
            <div className="py-2">
              <header>
                <h1 className="text-3xl font-bold text-heading-content">Book Chapters</h1>
              </header>
              <article className="mb-2 mt-2">
                <h3 className="text-xl font-semi-bold text-main-content">
                  Cloud technology and fuzzy-based decision support systems driving sustainable development
                </h3>
                <p className="text-l font-semi-bold text-main-content">
                  DOI: <a href="https://doi.org/10.1016/B978-0-443-23597-9.00002-0" className="text-blue-700 hover:text-blue-900">10.1016/B978-0-443-23597-9.00002-0</a>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Papers; 