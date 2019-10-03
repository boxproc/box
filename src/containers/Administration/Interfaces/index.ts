import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Interfaces from './Interfaces';

import {
  AdminInterfacesActionTypes,
  createLoadingSelector,
  handleDeleteAdminInterface,
  handleFilterAdminInterface,
  resetInterfaces,
  selectAdminInterface,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminInterfacesActionTypes.FILTER_ADMIN_INTERFACE,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  adminInterfaceItems: selectAdminInterface(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteInterface: handleDeleteAdminInterface,
    filterAdminInterface: handleFilterAdminInterface,
    resetInterfaces,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interfaces);
