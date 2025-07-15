import React from 'react';
import { Music, MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const Post = () => {
  return (
    <div className="bg-black">
      {/* Post Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm font-semibold">aniruddhacharyaji_47</span>
            </div>
            <div className="flex items-center space-x-1">
              <Music className="w-3 h-3 text-white" />
              <span className="text-white text-xs">aniruddhacharyaji_47 • Original...</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-transparent border border-white text-white px-4 py-1 rounded-md text-sm font-medium">
            Follow
          </button>
          <MoreHorizontal className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Post Content */}
      <div className="relative">
        <div className="h-[80vh] bg-gradient-to-b from-yellow-400 via-pink-400 to-red-400">
          <img
            src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
            alt="Post content"
            className="w-full h-full object-cover"
          />
        </div>
        
      
        {/* Action Buttons */}
        <div className=" right-4 bottom-32 flex justify-between px-4 py-4">
        <div className='flex justify-between w-1/2'> 
              <div className="flex items-center">
            <Heart className="w-6 h-6 text-white mb-1" />
            <span className="text-white text-xs pl-2">254</span>
          </div>
          <div className="flex  items-center">
            <MessageCircle className="w-6 h-6 text-white mb-1" />
            <span className="text-white text-xs pl-2">12</span>
          </div>
          <div className="flex  items-center">
            <Send className="w-6 h-6 text-white mb-1" />
          </div>
        </div>
          <div className="flex items-center">
            <Bookmark className="w-6 h-6 text-white mb-1" />
          </div>
        </div>
      </div>




       <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm font-semibold">aniruddhacharyaji_47</span>
            </div>
            <div className="flex items-center space-x-1">
              <Music className="w-3 h-3 text-white" />
              <span className="text-white text-xs">aniruddhacharyaji_47 • Original...</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-transparent border border-white text-white px-4 py-1 rounded-md text-sm font-medium">
            Follow
          </button>
          <MoreHorizontal className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Post Content */}
      <div className="relative">
        <div className="h-[90vh] bg-gradient-to-b from-yellow-400 via-pink-400 to-red-400">
          <img
            src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
            alt="Post content"
            className="w-full h-full object-cover"
          />
        </div>
        
      
        {/* Action Buttons */}
        <div className=" right-4 bottom-32 flex justify-between px-4 py-4">
        <div className='flex justify-between w-1/2'> 
              <div className="flex items-center">
            <Heart className="w-6 h-6 text-white mb-1" />
            <span className="text-white text-xs pl-2">254</span>
          </div>
          <div className="flex  items-center">
            <MessageCircle className="w-6 h-6 text-white mb-1" />
            <span className="text-white text-xs pl-2">12</span>
          </div>
          <div className="flex  items-center">
            <Send className="w-6 h-6 text-white mb-1" />
          </div>
        </div>
          <div className="flex items-center">
            <Bookmark className="w-6 h-6 text-white mb-1" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Post;