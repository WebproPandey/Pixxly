import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationSection = ({ title, items }) => (
  <div className="mb-6">
    <div className="px-4 py-3">
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
    </div>
    <div className="space-y-0">
      {items.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  </div>
);

export default NotificationSection;
