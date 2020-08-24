import React from 'react';
import {
  Route,
} from 'react-router';
import {
  Link,
} from 'react-router-dom';
import './index.css';

export default () => {
  return (
    <div id="header-container">
      <nav id="header-nav" className="header">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/article">Articles</Link>
          </li>
          <li>
            <Link to="/util">Utils</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ol>
      </nav>
    </div>
  )
};
