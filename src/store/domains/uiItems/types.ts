import { ImmutableArray } from 'seamless-immutable';

export interface IUiItemData {
  item_type: string;
  ui_item: string;
  description: string;
  order_number: number;
  permission: string;
  help_page_url: string;
}

export interface IUiItem {
  id: string;
  parentId: string;
  title: string;
  type: string;
  orderNumber: number;
  separator: boolean;
  helpPageURL: string;
  permission?: string;
}

export interface IUiItemsData {
  ui_items: Array<IUiItemData>;
}

export interface IHelpLinkData {
  url: Array<{ help_page_url: string }>;
}

export interface IUiItemsState {
  uiItems: ImmutableArray<IUiItemData>;
  helpLink: string;
}
