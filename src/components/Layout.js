// src/components/Layout.js
import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <h3>Choose your Item:</h3>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is an ADP demo Webapp.
          </p>
        </footer>
      </div>
    );
  }
}
