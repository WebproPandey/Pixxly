import React, { useState } from 'react';
import NotificationHeader from '../components/NotificationSection/NotificationHeader';
import NotificationSection from '../components/NotificationSection/NotificationSection';

function Notification() {
  const [notifications] = useState([
    {
      id: 1,
      type: 'new',
      user: 'amitpandey1761',
      action: 'dev_tiwariii and others liked your story.',
      time: '1d',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?...',
      postImage: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?...'
    },
    {
      id: 2,
      type: 'new',
      user: 'upadhyaysuraj082000',
      action: 'and ahpandey6145 liked your photo.',
      time: '1d',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?...',
      postImage: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?...'
    },
    {
      id: 3,
      type: 'new',
      user: 'shivangipandey_pandey',
      action: 'commented: ❤️❤️',
      time: '2h',
      avatar: 'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?...',
      postImage: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?...'
    },
    {
      id: 4,
      type: 'new',
      user: 'shivangipandey_pandey',
      action: 'swati_vivekmishra and others liked your post.',
      time: '1d',
      avatar: 'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?...',
      postImage: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?...'
    },
    {
      id: 5,
      type: 'week',
      user: 'nancy1239194',
      action: 'commented: ❤️❤️❤️',
      time: '2d',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?...',
      postImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?...'
    },
    {
      id: 6,
      type: 'week',
      user: 'dube_anand',
      action: 'commented: ❤️❤️❤️',
      time: '2d',
      avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?...',
      postImage: 'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?...'
    },
    {
      id: 7,
      type: 'week',
      user: 'sagar_r72',
      action: 'commented: Wo bhi AI ka hoke reh gayi',
      time: '2d',
      avatar: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?...',
      postImage: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?...'
    },
    {
      id: 8,
      type: 'week',
      user: 'saurabshukla.75',
      action: 'started following you.',
      time: '5d',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?...',
      showFollowBack: true
    }
  ]);

  const newNotifications = notifications.filter(n => n.type === 'new');
  const weekNotifications = notifications.filter(n => n.type === 'week');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <NotificationHeader />
        <div className="pb-4">
          <NotificationSection title="New" items={newNotifications} />
          <NotificationSection title="This Week" items={weekNotifications} />
        </div>
      </div>
    </div>
  );
}

export default Notification;
