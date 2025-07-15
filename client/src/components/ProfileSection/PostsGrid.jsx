import React from 'react';

function PostsGrid({ posts }) {
  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      {posts.map((post, index) => (
        <div key={index} className="aspect-square relative group cursor-pointer">
          <img
            src={post}
            alt={`Post ${index + 1}`}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
        </div>
      ))}
    </div>
  );
}

export default PostsGrid;
