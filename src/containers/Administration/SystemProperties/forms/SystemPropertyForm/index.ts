import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemPropertyForm from './SystemPropertyForm';

import {
  AdminSysPropsActionTypes,
  createLoadingSelector,
  handleAddAdminSysProp,
  handleUpdateAdminSysProps,
  selectCurrentAdminSysPropsItem,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSysPropsActionTypes.ADD_ADMIN_SYS_PROP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectCurrentAdminSysPropsItem(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addAdminSystemProperty: handleAddAdminSysProp,
    updateAdminSystemProperty: handleUpdateAdminSysProps,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemPropertyForm);
