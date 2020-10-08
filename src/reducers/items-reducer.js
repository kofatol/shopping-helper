const generateId = () => `f${(+new Date()).toString(16)}`;

const getUnitPrice = (itemPrice, itemWVolume) =>
  (itemPrice / itemWVolume).toFixed(2);

const itemsReducer = (state, action) => {
  if (state === undefined) {
    return {
      itemList: [],
    };
  }

  switch (action.type) {
    case 'ITEM_ADDED':
      const item = action.payload;
      const { itemPrice, itemWVolume } = item;
      item.unitPrice = getUnitPrice(itemPrice, itemWVolume);
      item.itemId = generateId();

      return {
        ...state,
        itemList: [...state.itemList, item],
      };

    case 'ITEM_DELETED':
      const itemId = action.payload;
      const { itemList } = state;
      const deletedItemIdx = itemList.findIndex(
        (item) => item.itemId === itemId
      );

      return {
        ...state,
        itemList: [
          ...itemList.slice(0, deletedItemIdx),
          ...itemList.slice(deletedItemIdx + 1),
        ],
      };

    case 'ALL_ITEMS_DELETED':
      return {
        ...state,
        itemList: [],
      };

    default:
      return state;
  }
};

export default itemsReducer;
