import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Interfaces from './Interfaces';

import {
  AdminInterfacesActionTypes,
  createLoadingSelector,
  handleDeleteAdminInterface,
  handleFilterAdminInterface,
  handleGetInterfaceLogData,
  resetInterfaces,
  selectActiveItemId,
  selectAdminInterface,
  selectAdminInterfaceName,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminInterfacesActionTypes.FILTER_ADMIN_INTERFACE,
  AdminInterfacesActionTypes.GET_INTERFACE_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  adminInterfaceItems: selectAdminInterface(state),
  interfaceName: selectAdminInterfaceName(state),
  currentInterfaceId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteInterface: handleDeleteAdminInterface,
    filterAdminInterface: handleFilterAdminInterface,
    getInterfaceLogData: handleGetInterfaceLogData,
    resetInterfaces,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interfaces);
