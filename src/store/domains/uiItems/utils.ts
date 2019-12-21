import { ImmutableArray } from 'seamless-immutable';

import { UiItem } from './types';

export const prepareUiItems = (uiItems: ImmutableArray<UiItem>) => {
  return uiItems && uiItems.asMutable()
    .sort((a, b) => a.sequence_number > b.sequence_number ? 1 : -1)
    .map(item => {
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
  return uiItems && uiItems.asMutable()
    .sort((a, b) => a.sequence_number > b.sequence_number ? 1 : -1)
    .map(uiItem => {
      const { ui_item, description, sequence_number, item_type } = uiItem;
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
