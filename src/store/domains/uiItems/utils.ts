import { ImmutableArray } from 'seamless-immutable';

import { uiItemTypesConst } from 'consts';

import { IUiItemData } from './types';

const sortByOrderNumber = (items: Array<IUiItemData>) => items.sort((a, b) => {
  if (a.order_number > b.order_number) {
    return 1;
  } else if (a.order_number < b.order_number) {
    return -1;
  } else {
    return null;
  }
});

export const prepareUiItems = (uiItems: ImmutableArray<IUiItemData>) => {
  const sortedItems = sortByOrderNumber(uiItems.asMutable());

  return sortedItems.map(item => {
    const {
      ui_item,
      description,
      item_type,
      order_number,
      permission,
      help_page_url,
    } = item;

    const isSeparator = item_type === uiItemTypesConst.SEPARATOR;

    return {
      id: ui_item,
      parentId: ui_item.split('/').slice(0, -1).join('/'),
      title: description,
      type: item_type,
      orderNumber: order_number,
      separator: isSeparator,
      permission,
      helpPageURL: help_page_url,
    };
  });
};
