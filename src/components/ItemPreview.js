// src/components/ItemPreview.js
import React from 'react';
import { Link } from 'react-router';

export default class ItemPreview extends React.Component {

  add() { // (3)
    console.log('add 1!');
  }

  render() {
    return (
      <div className="col-xs-4" onClick={this.add}>
        <h5 className="name">{this.props.name}</h5>
        <img src={`img/${this.props.image}`} width="70px"/>
      </div>
    );
  }
}
