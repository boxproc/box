import { ImmutableArray } from 'seamless-immutable';

export interface UiItem {
  item_type: string;
  ui_item: string;
  description: string;
  sequence_number: number;
  permission: string;
}

export interface UiItemPrepared {
  id: string;
  parentId: string;
  title: string;
  type: string;
  sequenceNumber: number;
  separator: boolean;
  permission?: string;
}

export interface UiItemsGroupItem {
  id: string;
  groupName: string;
  name: string;
  sequenceNumber: number;
  separator: boolean;
}

export interface UiItemsGroup {
  groupName: string;
  sequenceNumber: number;
  items: Array<UiItemsGroupItem>;
}

export interface UiItems {
  ui_items: Array<UiItem>;
}

export interface UiItemsState {
  uiItems: ImmutableArray<UiItem>;
}
