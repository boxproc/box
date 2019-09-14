import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import SystemProperties from './SystemProperties';

import {
  AdminSysPropsActionTypes,
  createLoadingSelector,
  handleDeleteAdminSysProp,
  handleFilterAdminSysProps,
  handleSetAdminSysPropId,
  handleUpdateAdminSysProps,
  selectAdminSysPropsItems,
  selectCurrentSysPropId,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSysPropsActionTypes.DELETE_ADMIN_SYS_PROP,
  AdminSysPropsActionTypes.UPDATE_ADMIN_SYS_PROPS,
  AdminSysPropsActionTypes.FILTER_ADMIN_SYS_PROPS,
]);

const dirty = isDirty(formNamesConst.SYSTEM_PROPERTY_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isFilterFormDirty: dirty(state),
  adminSysPropsItems: selectAdminSysPropsItems(state),
  currentSysPropId: selectCurrentSysPropId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteAdminSysProp: handleDeleteAdminSysProp,
    updateAdminSysProps: handleUpdateAdminSysProps,
    filterAdminSysProps: handleFilterAdminSysProps,
    setAdminSysPropId: handleSetAdminSysPropId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemProperties);
