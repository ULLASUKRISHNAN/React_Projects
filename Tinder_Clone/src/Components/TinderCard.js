import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import SwipeButtons from './SwipeButtons.js';

const TinderCards = () => {
  const [peoples, setPeople] = useState([]);

  useEffect(() => {
    async function getPeople(db) {
      const person = collection(db, 'people');
      const personSnapshot = await getDocs(person);
      const personList = personSnapshot.docs.map((doc) => doc.data());
      setPeople(personList);
    }
    getPeople(db);
  }, []);
  const onSwipe = (dir, remove) => {
    console.log('receiving' + remove);
  };
  const onCardLeftScreen = (person) => {
    console.log(person + 'left screen');
  };

  return (
    <div className='tinderCards'>
      <div className='tinderCard-container'>
        {peoples.map((person, index) => {
          return (
            <TinderCard
              className='swipe'
              key={index}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => onSwipe(dir, person.name)}
              onCardLeftScreen={() => onCardLeftScreen(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className='card'
              ></div>
              <h3 className='userName'>{person.name}</h3>
            </TinderCard>
          );
        })}
      </div>

      <SwipeButtons onCardLeftScreen={onCardLeftScreen} />
    </div>
  );
};

export default TinderCards;
