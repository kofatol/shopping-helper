import React from 'react';
import { connect } from 'react-redux';
import { allItemsDeleted } from '../../actions';
import './result-card.css';

const ResultCard = ({ resultItemList, allItemsDeleted }) => {
  let resulText = '';

  if (resultItemList.length > 1) {
    const itemNames = resultItemList
      .reduce((res, item) => {
        return (res += ', ' + item.itemName);
      }, '')
      .slice(1);

    resulText = `Товары ${itemNames} одинаковы в цене`;
  } else {
    const [{ itemName }] = resultItemList;
    resulText = `${itemName} дешевле, берите его ;)`;
  }

  return <Result resulText={resulText} allItemsDeleted={allItemsDeleted} />;
};

const Result = ({ resulText, allItemsDeleted }) => {
  return (
    <div className="container col-sm-6 mt-3">
      <div className="card border-primary text-center">
        <div className="card-body ">
          <h5 className="card-title">{resulText}</h5>
          <button
            className="btn btn-sm btn-primary col-md-4 btn-clear"
            onClick={allItemsDeleted}
          >
            Очистить список
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { allItemsDeleted };

export default connect(null, mapDispatchToProps)(ResultCard);
