import React from 'react';
import './Footer.css';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <footer ClassName='footer'>
        <ul ClassName='social-icons'>
          <li>
            <a href='https://www.twitter.com' ClassName='social-icon'>
              <i ClassName='fab '></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' ClassName='social-icon'>
              <i ClassName='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' ClassName='social-icon'>
              <i ClassName='fab fa-squarespace'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' ClassName='social-icon'>
              <i ClassName='fab fa-behance'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' ClassName='social-icon'>
              <i ClassName='fab fa-instagram'></i>
            </a>
          </li>
        </ul>

        <p>
          &copy; <span id='date'></span> Ullas U Krishnan. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
