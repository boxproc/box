import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Interfaces from './Interfaces';

import {
  AdminInterfacesActionTypes,
  createLoadingSelector,
  handleDeleteAdminInterface,
  handleFilterAdminInterface,
  handleGetLogData,
  resetInterfaces,
  selectActiveItemId,
  selectAdminCurrentInterfaceName,
  selectAdminInterface,
  selectInstitutionsOptions,
  SystemMonitorActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminInterfacesActionTypes.FILTER_ADMIN_INTERFACE,
  AdminInterfacesActionTypes.DELETE_ADMIN_INTERFACE,
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  interfaceItems: selectAdminInterface(state),
  currentInterfaceName: selectAdminCurrentInterfaceName(state),
  currentInterfaceId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteInterface: handleDeleteAdminInterface,
    filterInterface: handleFilterAdminInterface,
    getLogData: handleGetLogData,
    resetInterfaces,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interfaces);
