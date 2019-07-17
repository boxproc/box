import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddSystemPropertyModal from './AddSystemPropertyModal';

import {
  AdminSysPropsActionTypes,
  closeModal,
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
    closeModal,
    addAdminSysProp: handleAddAdminSysProp,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSystemPropertyModal);
