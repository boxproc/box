import { ImmutableArray } from 'seamless-immutable';

import { UiItem, UiItemsGroupItem } from './types';

const sortBySequenceNumber = (items: Array<UiItem>) => items.sort((a, b) => {
  if (a.sequence_number) {
    return 1;
  } else if (b.sequence_number) {
    return -1;
  } else {
    return null;
  }
});

export const prepareUiItems = (uiItems: ImmutableArray<UiItem>) => {
  const sortedItems = sortBySequenceNumber(uiItems.asMutable());

  return sortedItems.map(item => {
      const {
        ui_item,
        description,
        item_type,
        sequence_number,
      } = item;

      const isSeparator = item_type === 'S';

      return {
        id: ui_item,
        parentId: ui_item.split('/').slice(0, -1).join('/') || null,
        title: description,
        type: item_type,
        sequenceNumber: sequence_number,
        separator: isSeparator,
      };
    });
};

export const prepareUiItemsGroup = (uiItems: ImmutableArray<UiItem>) => {
  const sortedItems = sortBySequenceNumber(uiItems.asMutable());

  return sortedItems.map(item => {
      const { ui_item, description, sequence_number, item_type } = item;
      const isSeparator = item_type === 'S';

      return {
        id: ui_item,
        groupName: ui_item.split('/')[0].replace(/_/g, ' '),
        name: isSeparator ? 'Separator' : description,
        sequenceNumber: sequence_number,
        separator: isSeparator,
      };
    })
    .reduce((acc, obj) => {
      acc[obj.groupName] = acc[obj.groupName] || {
        groupName: null,
        sequenceNumber: null,
        items: [],
      };

      if (obj.id.split('/').length === 1) {
        acc[obj.groupName].groupName = obj.groupName;
        acc[obj.groupName].sequenceNumber = obj.sequenceNumber;
      }

      if (obj.id.split('/').length === 2) {
        acc[obj.groupName].items.push(obj);
      }
      return acc;
    },      {});
};

export const prepareItemsToSend = (data: Array<Partial<UiItemsGroupItem>>):
  Array<Partial<UiItem>> => {
  return data && data.map(item => {
    return {
      ui_item: item.id,
      sequence_number: item.sequenceNumber,
    };
  });
};
