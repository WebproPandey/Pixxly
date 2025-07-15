import React from 'react';

const messages = [
  {
    id: 1,
    username: 'Abhinav',
    message: 'Abhinav sent an attachment.',
    time: '1h',
    avatar: 'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=56&h=56&fit=crop',
    isOnline: true
  },
  {
    id: 2,
    username: '',
    message: '\ud83c\udfb5 sent an attachment.',
    time: '12h',
    avatar: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=56&h=56&fit=crop',
    isOnline: false
  },
  {
    id: 3,
    username: 'Nancy',
    message: 'Kaise ho',
    time: '18h',
    avatar: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=56&h=56&fit=crop',
    isOnline: false
  },
  {
    id: 4,
    username: 'swativvek mishra',
    message: 'swativvek sent an attachment.',
    time: '23h',
    avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=56&h=56&fit=crop',
    isOnline: false
  },
  {
    id: 5,
    username: 'Anand Dube',
    message: 'Anand sent an attachment.',
    time: '23h',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=56&h=56&fit=crop',
    isOnline: false
  },
  {
    id: 6,
    username: 'Amit Pandey',
    message: 'Amit sent an attachment.',
    time: '1d',
    avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=56&h=56&fit=crop',
    isOnline: false
  }
];

const MessageItem = ({ message }) => (
  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 transition-colors">
    <div className="relative">
      <img
        src={message.avatar}
        alt={message.username}
        className="w-14 h-14 rounded-full object-cover"
      />
      {message.isOnline && (
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 text-sm truncate">
          {message.username || 'Unknown'}
        </h3>
        <span className="text-xs text-gray-500 ml-2">{message.time}</span>
      </div>
      <p className="text-sm text-gray-600 truncate mt-0.5">{message.message}</p>
    </div>
  </div>
);

const MessagesList = ({ activeTab }) => (
  <div className="pb-4">
    {activeTab === 'messages' ? (
      <div className="space-y-0">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    ) : (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-500 text-sm">No message requests</p>
      </div>
    )}
  </div>
);

export default MessagesList;
