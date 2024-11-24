import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Registration Period',
      description: "Sign up now to showcase your talent with Master Designer V2.0. Don't miss your chance to secure your spot in this exciting competition.",
    },
    {
      title: 'Submission Period',
      description: 'Submit your designs online and unleash your creativity in Phase 1. Show the world your brilliance and stand out.',
    },
    {
      title: 'Voting Round',
      description: 'Cast your vote for the top designs and prepare to win exciting prizes. Support your favorite design and be part of the selection process.',
    },
    {
      title: 'Grand Final Competition',
      description: 'Exhibit your design brilliance in our grand finale physical competition. Showcase your leadership skills, challenge other design leaders, and compete for top honors.',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md py-8">
      <h2 className="text-center text-3xl font-bold text-white mb-8">Timeline</h2>
      <div className="bg-black w-full relative">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start mb-8 relative">
            {index < timelineData.length - 1 && (
              <div className="absolute top-0 left-2.5 transform -translate-x-1/2 h-full border-l-2 border-[#4a3aad]" style={{ top: '1.5rem', bottom: '1.0rem' }} />
            )}
            
            <div className="relative">
              <div className="relative w-5 h-5 bg-black border-2 border-[#4a3aad] rounded-full">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-8">
              <h3 className="text-lg font-semibold text-[#87e5e2] text-left mb-4">{item.title}</h3>
              <p className="text-white text-left">{item.description}</p>
              <hr className="border-t border-gray-100 mt-4 mb-4"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
//Mafia58
