export enum adminCyclesPathNames {
  GET = '/ui/administration/cycles/cycles_editor/get',
  CREATE = '/ui/administration/cycles/cycles_editor/create',
  DELETE = '/ui/administration/cycles/cycles_editor/delete',
  UPDATE = '/ui/administration/cycles/cycles_editor/update',
}

export enum adminEventDataElemsPathNames {
  GET = '/ui/administration/dictionaries/event_data_elements/get',
}

export enum adminEventsPathNames {
  GET = '/ui/administration/dictionaries/events/get',
}

export enum adminUserNames {
  GET = '/ui/administration/permissions/users/get',
  CREATE = '/ui/administration/permissions/users/create',
  UPDATE = '/ui/administration/permissions/users/update',
}

export enum adminUserGroupsPathNames {
  GET_USERS_GROUPS = '/ui/administration/permissions/users_group/get',
  GET_ACTIVE_USERS = '/ui/administration/permissions/users_group_members/get_active_users',
  GET_GROUP_MEMBERS = '/ui/administration/permissions/users_group_members/get',
  GET_GROUP_UI_ITEMS = '/ui/administration/permissions/group_permissions_ui_items/get',
  GET_GROUP_PERMISSIONS = '/ui/administration/permissions/group_permissions/get',
  CREATE_USERS_GROUP = '/ui/administration/permission/users_group/create',
  UPDATE_USERS_GROUP = '/ui/administration/permissions/users_group/update',
  DELETE_USERS_GROUP_MEMBER = '/ui/administration/permissions/users_group_members/delete',
  DELETE_GROUP_PERMISSIONS = '/ui/administration/permissions/group_permissions/delete',
  CREATE_USERS_GROUP_MEMBERS = '/ui/administration/permissions/users_group_members/create',
  CREATE_GROUP_PERMISSIONS = '/ui/administration/permissions/group_permissions/create',
}

export enum adminSchedulerPathNames {
  GET = '/ui/administration/scheduler/get',
  DELETE = '/ui/administration/scheduler/delete',
  CREATE = '/ui/administration/scheduler/create',
  UPDATE = '/ui/administration/scheduler/update',
}

export enum adminSystemPropsPathNames {
  GET = '/ui/administration/system_properties/get',
  DELETE = '/ui/administration/system_properties/delete',
  CREATE = '/ui/administration/system_properties/create',
  UPDATE = '/ui/administration/system_properties/update',
}
