import React from 'react';
import { Plus } from 'lucide-react';

const Stories = () => {
  const stories = [
    {
      id: 1,
      username: "Your story",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      isOwn: true,
      hasNew: false
    },
    {
      id: 2,
      username: "sheryians_codi...",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      isOwn: false,
      hasNew: true
    },
    {
      id: 3,
      username: "anupamurf",
      image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      isOwn: false,
      hasNew: true
    },
    {
      id: 4,
      username: "swati_vivek",
      image: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      isOwn: false,
      hasNew: true
    }
  ];

  return (
    <div className="bg-black px-4 py-3">
      <div className="flex space-x-4 overflow-x-auto">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 min-w-0 ">
            <div className={`relative ${story.hasNew ? 'p-[4px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full' : ''}`}>
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.username}
                  className="w-14 h-14 rounded-full border-2 border-black object-cover"
                />
                {story.isOwn && (
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
             
            </div>
            <span className="text-white text-xs truncate max-w-[60px] text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;