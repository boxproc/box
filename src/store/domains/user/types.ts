import { ImmutableArray } from 'seamless-immutable';

export interface UiItem {
  item_type: string;
  permission: string;
  ui_item: string;
  has_children?: boolean;
}

export interface UiItemPrepared {
  id: string;
  parentId: string;
  title: string;
  hasChildren?: boolean;
}

export interface UserInfo {
  userName: string;
  ui_items: Array<UiItem>;
}

export interface UserState {
  userInfo: {
    userName: string;
    ui_items: ImmutableArray<UiItem>;
  };
}
