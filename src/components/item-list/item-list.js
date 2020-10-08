import React from 'react';
import ItemCard from '../item-card';
import { connect } from 'react-redux';

import './item-list.css';

const ItemList = ({ itemList }) => {
  return (
    <div className="container col-sm-6">
      <div className="row">
      {itemList.map((item) => {
        return (
          <div key={item.itemId} className="col-sm-6">
            <ItemCard item={item} />
          </div>
        );
      })}
    </div>
    </div>

  );
};

const mapStateToProps = ({ items: { itemList } }) => {
  return { itemList };
};

export default connect(mapStateToProps)(ItemList);
