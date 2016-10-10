// src/components/IndexPage.js
import React from 'react';
import ItemPreview from './ItemPreview';
import items from '../data/items';

export default class IndexPage extends React.Component {
  render() {
    return (

      <div>
          <h3>Choose your Item:</h3>
        <div className="row">
          <div className="col-xs-1"></div>
          <div className="jumbotron col-xs-8">
              {items.map(itemData => <ItemPreview key={itemData.name} {...itemData} />)}
          </div>
          <div className="col-xs-3"></div>
        </div>
        <h3>How do you want to pay?</h3>
        <div className="row">
          <div className="col-xs-1"></div>
          <div className="jumbotron col-xs-8">
            <div className="col-xs-1"></div>
            <a className="btn btn-info col-xs-4">Visa</a>
            <div className="col-xs-2"></div>
            <a className="btn btn-info col-xs-4">paypal</a>
            <div className="col-xs-1"></div>
          </div>
          <div className="col-xs-3"></div>
        </div>
      </div>
    );
  }
}
