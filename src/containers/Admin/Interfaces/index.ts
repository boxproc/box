import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Interfaces from './Interfaces';

import {
  activeItemIdSelector,
  currentInterfaceNameSelector,
  handleDeleteInterface,
  handleFilterInterfaces,
  handleGetLogData,
  interfacesSelector,
  isDeletingInterfaceSelector,
  isFilteringInterfacesSelector,
  isReadOnlySelector,
  isSysMonitorLoadingLogDataSelector,
  IStoreState,
  resetInterfaces,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isSysMonitorLoadingLogDataSelector(state)
    || isFilteringInterfacesSelector(state)
    || isDeletingInterfaceSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
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
