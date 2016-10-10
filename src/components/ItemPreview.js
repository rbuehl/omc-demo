// src/components/ItemPreview.js
import React from 'react';
import { Link } from 'react-router';

export default class ItemPreview extends React.Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
  }

  add() { // (3)
    console.log('Button pressed;');
    console.log('this:' + this.props.name);
    var item = this.props.name;
    fetch('/api/metrics', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "item": item //this.props.name n/a
      })
    });
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
