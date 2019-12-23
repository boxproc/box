import { ImmutableArray } from 'seamless-immutable';

export interface UiItem {
  item_type: string;
  ui_item: string;
  description: string;
  order_number: number;
  permission: string;
}

export interface UiItemPrepared {
  id: string;
  parentId: string;
  title: string;
  type: string;
  orderNumber: number;
  separator: boolean;
  permission?: string;
}

export interface UiItems {
  ui_items: Array<UiItem>;
}

export interface UiItemsState {
  uiItems: ImmutableArray<UiItem>;
}
