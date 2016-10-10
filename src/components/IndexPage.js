// src/components/IndexPage.js
import React from 'react';
import ItemPreview from './ItemPreview';
import items from '../data/items';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="item-selector">
          {items.map(itemData => <ItemPreview key={itemData.name} {...itemData} />)}
        </div>
      </div>
    );
  }
}
