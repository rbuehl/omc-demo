// src/components/ItemPreview.js
import React from 'react';
import { Link } from 'react-router';

export default class ItemPreview extends React.Component {

  add() { // (3)
    console.log('add 1!');
  }

  render() {
    return (
      <div className="item-preview" onClick={this.add}>
        <img src={`img/${this.props.image}`} width="150px"/>
        <h2 className="name">{this.props.name}</h2>
      </div>
    );
  }
}
