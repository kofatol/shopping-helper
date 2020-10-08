const itemAdded = (item) => {
  return {
    type: 'ITEM_ADDED',
    payload: item,
  };
};

const itemDeleted = (itemId) => {
  return {
    type: 'ITEM_DELETED',
    payload: itemId,
  };
};

const allItemsDeleted = () => {
  return {
    type: 'ALL_ITEMS_DELETED',
  };
};

export { itemAdded, itemDeleted, allItemsDeleted };
