import { ImmutableArray } from 'seamless-immutable';

export interface UiItem {
  item_type: string;
  permission: string;
  ui_item: string;
}

export interface UiItemPrepared {
  id: string;
  parentId: string;
  title: string;
  type: string;
}

export interface UserInfo {
  ui_items: Array<UiItem>;
}

export interface UserState {
  userInfo: {
    ui_items: ImmutableArray<UiItem>;
  };
}
