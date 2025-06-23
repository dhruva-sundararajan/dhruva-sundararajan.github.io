import React from 'react';

const RecentNews = () => {
  const newsItems = [
    {
      date: "Dec 2024",
      content: "Journal Publication \"A Decision Framework With q-Rung Fuzzy Preferences for Ranking Barriers Affecting Clean Energy Utilization Within Healthcare Industry\" has been published in the IEEE Transaction in Engineering Management."
    },
    {
      date: "Aug 2024",
      content: "I am happy to share that I have started my PhD in Operations Research in Virginia Tech. I am part of the Grado Department of Industrial and Systems Engineering."
    },
    {
      date: "Jul 2024",
      content: "Journal Publication \"Demystifying the Stability and the Performance Aspects of CoCoSo Ranking Method under Uncertain Preferences\" has been published in the Informatica Journal."
    },
    {
      date: "June 2024",
      content: "Book Chapter \"Cloud technology and fuzzy-based decision support systems driving sustainable development\" has been published as part of the book titled \"Decision Support Systems for Sustainable Computing\"."
    },
    {
      date: "Jan 2024",
      content: "Conference Proceeding \"Fermatean fuzzy-based PCA CoCoSo framework to assess digital technologies in Health 4.0\" has been published in IEEE Xplore as a part of the proceedings of IEEE 23rd International Symposium of Computational Intelligence and Informatics (CINTI), 2023."
    }
  ];

  return (
    <div className="bg-section-alt min-h-screen page-transition">
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Header */}
          <div className="w-full lg:w-1/3">
            <header className="text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-heading-content mb-4">
                Recent News
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-color to-secondary-color mx-auto lg:mx-0 rounded-full"></div>
            </header>
          </div>
          
          {/* News Items */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={index} className="news-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block bg-accent-color text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.date}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-main-content leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews; 