import React from 'react';

function Feedback({ isDarkMode }) {
  const sectionBackgroundColor = isDarkMode ? 'bg-gray-700' : 'bg-blue-200';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const boxBackgroundColor = isDarkMode ? 'bg-gray-400' : 'bg-white';

  const feedbackData = [
    { title: 'Comment', content: 'Feedback' },
    { title: 'Comment', content: 'Feedback' },
    { title: 'Comment', content: 'Feedback' },
  ];

  return (
    <div className={`feedback py-16 px-8 ${sectionBackgroundColor} ${textColor}`}>
      <div className="header flex items-center justify-between mb-12">
        <div className={`info ${textColor}`}>
          <h3 className="text-6xl font-bold">Customers Feedback</h3>
        </div>
      </div>
      <div className="feedback-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbackData.map((item, index) => (
          <div
            key={index}
            className={`feedback-item rounded-lg overflow-hidden border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${boxBackgroundColor} ${textColor} w-full`}
          >
            <div className={`info p-8`}>
              <h4 className={`text-2xl font-bold mb-2 ${textColor}`}>{item.title}</h4>
              <p className={`text-gray-700 ${isDarkMode ? 'text-white' : 'text-black'}`}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
