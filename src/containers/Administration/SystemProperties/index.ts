import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemProperties from './SystemProperties';

import {
  AdminSysPropsActionTypes,
  createLoadingSelector,
  handleDeleteAdminSysProp,
  handleFilterAdminSysProps,
  handleUpdateAdminSysProps,
  resetSystemProperties,
  selectActiveItemId,
  selectAdminSysPropsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSysPropsActionTypes.UPDATE_ADMIN_SYS_PROPS,
  AdminSysPropsActionTypes.FILTER_ADMIN_SYS_PROPS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminSysPropsItems: selectAdminSysPropsItems(state),
  currentSysPropId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteAdminSysProp: handleDeleteAdminSysProp,
    updateAdminSysProps: handleUpdateAdminSysProps,
    filterAdminSysProps: handleFilterAdminSysProps,
    resetSystemProperties,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemProperties);
