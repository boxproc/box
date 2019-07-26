// import { cookiesNames, formNames, modalNames, } from 'consts';
// import { reset as resetForm } from 'redux-form';
// import * as api from './api';

// import { closeModal } from 'store/domains/modals';

// import {
//   ActionTypeKeys,
//   AddAdminUsersGroupAction,
//   GetAdminUsersGroupAction,
//   UpdateAdminUsersGroupAction,
// } from './actionType';

// import { apiClient } from 'services';

// import { Thunk, VoidPromiseThunk } from 'types';

// import { prepareAdminUsersGroupValuesCamel} from './utils';

// import {
//    AdminUsersGroupEditableItem,
//    AdminUsersGroupEditableItemPrepared,
// } from './types';

// import { cookiesUtil, errorDecoratorUtil } from 'utils';

// export type GetAdminUser = () => GetAdminUsersGroupAction;
// export type HandleGetAdminUser = VoidPromiseThunk;

// export type AddAdminUser = (values: AdminUsersGroupEditableItemPrepared) =>
// AddAdminUsersGroupAction;
// export type HandleAddAdminUser = (values: AdminUsersGroupEditableItem) =>
//   Thunk<void>;

// // export type FilterUsers = (params: UsersFilterParamsPrepared) => FilterUsersAction;
// // export type HandleFilterUsers = (params: UsersFilterParams) => Thunk<void>;

// export type UpdateAdminUsersGroup = (propValues: AdminUsersGroupEditableItemPrepared) =>
// UpdateAdminUsersGroupAction;
// export type HandleUpdateAdminUser =
//  (propValues: AdminUserEditableItem) => Thunk<void>;

// export const getAdminUser: GetAdminUser = () => ({
//   type: ActionTypeKeys.GET_ADMIN_USER,
//   payload: api.getAdminUser(),
// });

// export const addAdminUser: AddAdminUser = values => ({
//   type: ActionTypeKeys.ADD_ADMIN_USER,
//   payload: api.addAdminUser(values),
//   meta: values,
// });

// export const filterUsers: FilterUsers = params => ({
//   type: ActionTypeKeys.FILTER_USERS,
//   payload: api.filterAdminUsers(params),
//   meta: params,
// });

// export const updateAdminUser: UpdateAdminUser = values => ({
//   type: ActionTypeKeys.UPDATE_ADMIN_USER,
//   payload: api.updateAdminUser(values),
//   meta: values,
// });

// export const handleGetAdminUser: HandleGetAdminUser = () =>
//   async dispatch => {
//     errorDecoratorUtil.withErrorHandler(
//       async () => {
//         const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
//         apiClient.set('session_id', sessionId);
//         await dispatch(getAdminUser());
//       },
//       dispatch
//     );
//   };

// export const handleAddAdminUser: HandleAddAdminUser = cycleEditorRecords =>
//   async dispatch => {
//     errorDecoratorUtil.withErrorHandler(
//       async () => {
//         const preparedValues = prepareAdminUserValuesCamel(cycleEditorRecords);
//         console.log('preparedValues', preparedValues);
//         await dispatch(addAdminUser(preparedValues));
//         await dispatch(closeModal(modalNames.ADD_ADMIN_USER));
//         await dispatch(getAdminUser());
//         await dispatch(resetForm(formNames.DEFINE_ADMIN_USER));
//       },
//       dispatch
//     );
//   };

// export const handleFilterUsers: HandleFilterUsers = params =>
//   async dispatch => {
//     errorDecoratorUtil.withErrorHandler(
//       async () => {
//         console.log('params', params);

//         const preparedValues = prepareUsersFiltersParamsToSend(params);
//         console.log('preparedValues', preparedValues);
//         await dispatch(filterUsers(preparedValues));
//       },
//       dispatch
//     );
//   };

// export const handleUpdateAdminUser: HandleUpdateAdminUser = values =>
//   async dispatch => {
//     errorDecoratorUtil.withErrorHandler(
//       async () => {
//         const preparedValues = prepareAdminUserValuesCamel(values);
//         await dispatch(updateAdminUser(preparedValues));
//         await dispatch(closeModal(modalNames.EDIT_ADMIN_USER));

//       },
//       dispatch
//     );
//   };
