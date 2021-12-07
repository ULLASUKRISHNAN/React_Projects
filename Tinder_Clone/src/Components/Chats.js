import React from 'react';
import './chats.css';
import Chat from './Chat';

const Chats = () => {
  return (
    <div className='chats'>
      <Chat
        name='Sarah'
        message='message'
        timestamp='3 days ago'
        pic='https://picsum.photos/200/300'
      />
      <Chat
        name='Sarah'
        message='message'
        timestamp='3 days ago'
        pic='https://picsum.photos/200/300'
      />
      <Chat
        name='Sarah'
        message='message'
        timestamp='3 days ago'
        pic='https://picsum.photos/200/300'
      />
      <Chat
        name='Sarah'
        message='message'
        timestamp='3 days ago'
        pic='https://picsum.photos/200/300'
      />
    </div>
  );
};

export default Chats;
