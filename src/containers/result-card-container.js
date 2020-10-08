import React from 'react';
import { connect } from 'react-redux';
import StartingCard from '../components/starting-card';
import ResultCard from '../components/result-card';

const ResultCardContainer = ({ itemList }) => {
  const hasMoreThenOneItem = itemList.length > 1;
  const hasOnlyOneItem = itemList.length === 1;

  const getLowestUnitPriceItem = (itemList) => {
    const lowestUnitPrice = getLowestUnitPrice(itemList);
    const lowestUnitPriceItems = itemList.filter(
      (item) => item.unitPrice === lowestUnitPrice
    );

    return lowestUnitPriceItems;
  };

  const getLowestUnitPrice = (itemList) => {
    const lowestUnitPrice = itemList.reduce((res, item) => {
      return (res = res <= item.unitPrice ? res : item.unitPrice);
    }, 10000000);

    return lowestUnitPrice;
  };

  const resultItemList = getLowestUnitPriceItem(itemList);

  return (
    <div>
      {hasMoreThenOneItem ? (
        <ResultCard resultItemList={resultItemList} />
      ) : hasOnlyOneItem ? null : <StartingCard />}
    </div>
  );
};

const mapStateToProps = ({ items: { itemList } }) => {
  return { itemList };
};

export default connect(mapStateToProps)(ResultCardContainer);
