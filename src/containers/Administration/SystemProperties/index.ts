import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemProperties from './SystemProperties';

import {
  AdminSysPropsActionTypes,
  createLoadingSelector,
  handleDeleteAdminSysProp,
  handleGetAdminSysProps,
  handleUpdateAdminSysProps,
  openModal,
  selectAdminSysPropsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSysPropsActionTypes.GET_ADMIN_SYS_PROPS,
  AdminSysPropsActionTypes.DELETE_ADMIN_SYS_PROP,
  AdminSysPropsActionTypes.UPDATE_ADMIN_SYS_PROPS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminSysPropsItems: selectAdminSysPropsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminSysProps: handleGetAdminSysProps,
    deleteAdminSysProp: handleDeleteAdminSysProp,
    updateAdminSysProps: handleUpdateAdminSysProps,
    openModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemProperties);
