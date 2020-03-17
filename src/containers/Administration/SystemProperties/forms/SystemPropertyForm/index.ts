import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemPropertyForm from './SystemPropertyForm';

import {
  AdminSysPropsActionTypes,
  createLoadingSelector,
  handleAddAdminSysProp,
  handleDeleteAdminSysProp,
  handleUpdateAdminSysProps,
  selectActiveItemId,
  selectCurrentAdminSysPropsItem,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminSysPropsActionTypes.ADD_ADMIN_SYS_PROP,
  AdminSysPropsActionTypes.UPDATE_ADMIN_SYS_PROPS,
  AdminSysPropsActionTypes.DELETE_ADMIN_SYS_PROP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectCurrentAdminSysPropsItem(state),
  currentSystemPropertyId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addSystemProperty: handleAddAdminSysProp,
    updateSystemProperty: handleUpdateAdminSysProps,
    deleteSystemProperty: handleDeleteAdminSysProp,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemPropertyForm);
