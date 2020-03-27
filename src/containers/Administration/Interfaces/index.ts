import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Interfaces from './Interfaces';

import {
  activeItemIdSelector,
  createLoadingSelector,
  currentInterfaceNameSelector,
  handleDeleteInterface,
  handleFilterInterfaces,
  handleGetLogData,
  interfacesSelector,
  isDeletingInterfaceSelector,
  isFilteringInterfacesSelector,
  isReadOnlySelector,
  resetInterfaces,
  selectInstitutionsOptions,
  StoreState,
  SystemMonitorActionTypes,
} from 'store';

const loadingSelector = createLoadingSelector([
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state)
    || isFilteringInterfacesSelector(state)
    || isDeletingInterfaceSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  interfaceItems: interfacesSelector(state),
  currentInterfaceName: currentInterfaceNameSelector(state),
  currentInterfaceId: activeItemIdSelector(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteInterface: handleDeleteInterface,
    filterInterfaces: handleFilterInterfaces,
    getLogData: handleGetLogData,
    resetInterfaces,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interfaces);
