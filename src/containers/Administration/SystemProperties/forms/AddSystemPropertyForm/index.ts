import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddSystemPropertyForm from './AddSystemPropertyForm';

import {
  AdminSysPropsActionTypes,
  createLoadingSelector,
  handleAddAdminSysProp,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSysPropsActionTypes.ADD_ADMIN_SYS_PROP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addAdminSysProp: handleAddAdminSysProp,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSystemPropertyForm);
