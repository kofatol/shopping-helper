import React from 'react';
import { connect } from 'react-redux';
import { itemDeleted } from '../../actions';
import './item-card.css';

const ItemCard = ({ item, itemDeleted }) => {
  const { itemName, itemPrice, unitPrice, itemId } = item;
  const onDelete = () => itemDeleted(itemId);

  return (
    <div className="card mt-3 border-primary">
      <div className="card-header">
        {itemName}
        <button
          onClick={onDelete}
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-times-circle"></i>
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">Цена за единицу: {unitPrice} руб.</h5>
        <p className="card-text">Цена за упаковку: {itemPrice} руб.</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = { itemDeleted };

export default connect(null, mapDispatchToProps)(ItemCard);
