import React from 'react';

const RecentNews = () => {
  return (
    <section id="recent-news" className="bg-section-alt">
      <div className="container mx-auto px-8 py-16 md:px-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex flex-col md:mr-12">
            <header className="py-2 text-center md:text-center">
              <h1 className="text-4xl font-bold text-heading-content">Recent News</h1>
            </header>
          </div>
          <div className="w-full flex flex-col md:ml-6">
            <p className="mt-2 mb-2 text-xl font-semi-bold text-main-content">
              <b>Dec 2024:</b> Journal Publication "A Decision Framework With q-Rung Fuzzy Preferences for Ranking Barriers Affecting Clean Energy Utilization Within Healthcare Industry" has been published in the IEEE Transaction in Engineering Management.
            </p>
            <p className="mt-2 mb-2 text-xl font-semi-bold text-main-content">
              <b>Aug 2024:</b> I am happy to share that I have started my PhD in Operations Research in Virginia Tech. I am part of the Grado Department of Industrial and Systems Engineering.
            </p>
            <p className="mt-2 mb-2 text-xl font-semi-bold text-main-content">
              <b>Jul 2024:</b> Journal Publication "Demystifying the Stability and the Performance Aspects of CoCoSo Ranking Method under Uncertain Preferences" has been published in the Informatica Journal.
            </p>
            <p className="mt-2 mb-2 text-xl font-semi-bold text-main-content">
              <b>June 2024:</b> Book Chapter "Cloud technology and fuzzy-based decision support systems driving sustainable development" has been published as part of the book titled "Decision Support Systems for Sustainable Computing".
            </p>
            <p className="mt-2 mb-2 text-xl font-semi-bold text-main-content">
              <b>Jan 2024:</b> Conference Proceeding "Fermatean fuzzy-based PCA CoCoSo framework to assess digital technologies in Health 4.0" has been published in IEEE Xplore as a part of the proceedings of IEEE 23<sup>rd</sup> International Symposium of Computational Intelligence and Informatics (CINTI), 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews; 