import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemProperties from './SystemProperties';

import {
  AdminSysPropsActionTypes,
  createLoadingSelector,
  handleDeleteAdminSysProp,
  handleFilterAdminSysProps,
  handleGetAdminSysProps,
  handleUpdateAdminSysProps,
  selectAdminSysPropsItems,
  selectSysPropsFilterParams,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSysPropsActionTypes.GET_ADMIN_SYS_PROPS,
  AdminSysPropsActionTypes.DELETE_ADMIN_SYS_PROP,
  AdminSysPropsActionTypes.UPDATE_ADMIN_SYS_PROPS,
  AdminSysPropsActionTypes.FILTER_ADMIN_SYS_PROPS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminSysPropsItems: selectAdminSysPropsItems(state),
  sysPropsFilterParams: selectSysPropsFilterParams(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminSysProps: handleGetAdminSysProps,
    deleteAdminSysProp: handleDeleteAdminSysProp,
    updateAdminSysProps: handleUpdateAdminSysProps,
    filterAdminSysProps: handleFilterAdminSysProps,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemProperties);
