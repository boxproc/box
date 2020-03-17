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
  selectIsReadOnly,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminSysPropsActionTypes.UPDATE_ADMIN_SYS_PROPS,
  AdminSysPropsActionTypes.DELETE_ADMIN_SYS_PROP,
  AdminSysPropsActionTypes.FILTER_ADMIN_SYS_PROPS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  sysPropsItems: selectAdminSysPropsItems(state),
  currentSysPropId: selectActiveItemId(state),
  isReadOnly: selectIsReadOnly(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteSysProp: handleDeleteAdminSysProp,
    updateSysProps: handleUpdateAdminSysProps,
    filterSysProps: handleFilterAdminSysProps,
    resetSystemProperties,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemProperties);
