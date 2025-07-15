import React from 'react';

const stories = [
  {
    id: 1,
    username: 'Your note',
    avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
    isNote: true
  },
  {
    id: 2,
    username: 'Devesh',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
    isNote: false
  },
  {
    id: 3,
    username: 'चंदन ❤️',
    avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
    isNote: false
  }
];

const StoryItem = ({ story }) => (
  <div className="flex flex-col items-center space-y-1 min-w-0">
    <div className="relative">
      <div className={`w-15 h-15 rounded-full p-0.5 ${story.isNote ? 'bg-gray-300' : 'bg-gradient-to-tr from-yellow-400 to-pink-600'}`}>
        <img
          src={story.avatar}
          alt={story.username}
          className="w-full h-full rounded-full object-cover bg-white p-0.5"
        />
      </div>
      {story.isNote && (
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">+</span>
        </div>
      )}
    </div>
    <span className="text-xs text-gray-900 text-center truncate w-16">{story.username}</span>
  </div>
);

const Stories = () => (
  <div className="px-4 mb-4">
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
      {stories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
  </div>
);

export default Stories;
