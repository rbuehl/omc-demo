// src/components/NotImplementedPage.js
import React from 'react';
import { Link } from 'react-router';

export default class NotImplementedPage extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1>501</h1>
        <h2>Not yet implemented!</h2>
        <p>
          <Link to="/">Please choose another payment option.</Link>
        </p>
      </div>
    );
  }
}
