import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';

const ChatScreen = () => {
  const { person } = useParams();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'rose',
      image: 'https://picsum.photos/200/300',
      message: 'how it is going',
    },
    {
      message: ' how is it going',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };
  return (
    <div className='ChatScreen'>
      <p className='chatScreen__time'>{`You Matched With ${person.toUpperCase()}`}</p>
      {messages.map((item) => {
        return item.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='ChatScreen__image'
              alt={item.name}
              src={item.image}
            />
            <p className='ChatScreen__text'>{item.message}</p>
          </div>
        ) : (
          <div className='ChatScreen__message1'>
            <p className='ChatScreen__textUser'>{item.message}</p>
            <Avatar
              className='ChatScreen__image1'
              alt={item.name}
              src={item.image}
            />
          </div>
        );
      })}
      <form className='chatScreen__input'>
        <input
          type='text'
          className='chatScreen__inputField'
          placeholder='Type a message...'
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className='chatScreen__inputButton'
          onClick={handleSend}
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
