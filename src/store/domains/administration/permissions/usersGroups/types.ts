import { ImmutableArray } from 'seamless-immutable';
import { SuccessResponseStatusType } from 'types';

export interface AdminUsersGroupItemResp {
  id: number;
  institution_id: number|string;
  name: string;
}

export interface AdminUsersGroupEditableItemId {
    id: number;
}

export interface AdminUsersGroupEditableItemPrepared extends AdminUsersGroupEditableItemId  {
    institution_id: number|string;
    name: string;
}

export interface AdminUsersGroupItem    {
    id: number;
    institutionId: number|string;
    name: string;
}

export interface AdminUsersGroupEditableItem  {
    institutionId?: number|string;
    name?: string;
}

export interface AdminUsersGroupDataResp extends SuccessResponseStatusType {
    users_group: Array<AdminUsersGroupItemResp>;
}

export interface AdminUsersGroupState {
    users_group: ImmutableArray<AdminUsersGroupItemResp>;
    // filterUsers: UsersFilterParamsPrepared;
}
