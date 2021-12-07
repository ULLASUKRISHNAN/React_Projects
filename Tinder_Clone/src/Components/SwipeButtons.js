import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons(props) {
  console.log(props);
  return (
    <div className='SwipeButtons'>
      <IconButton className='SwipeButtons_repeat btn'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton
        className='SwipeButtons_left btn'
        onClick={() => props.onCardLeftScreen()}
      >
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='SwipeButtons_star btn'>
        <StarIcon fontSize='large' />
      </IconButton>
      <IconButton className='SwipeButtons_right btn'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='SwipeButtons_lightning btn'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
