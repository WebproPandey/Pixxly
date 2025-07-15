import React from 'react';

const NotificationItem = ({ notification }) => (
  <div className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
    <div className="flex items-center space-x-3 flex-1">
      <img
        src={notification.avatar}
        alt={notification.user}
        className="w-11 h-11 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900">
          <span className="font-semibold">{notification.user}</span>
          <span className="ml-1 text-gray-700">{notification.action}</span>
          <span className="ml-2 text-gray-500">{notification.time}</span>
        </p>
      </div>
    </div>

    <div className="flex items-center space-x-3">
      {notification.showFollowBack ? (
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors">
          Follow Back
        </button>
      ) : (
        notification.postImage && (
          <img
            src={notification.postImage}
            alt="Post"
            className="w-11 h-11 rounded object-cover"
          />
        )
      )}
    </div>
  </div>
);

export default NotificationItem;
