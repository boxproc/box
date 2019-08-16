import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Interfaces from './Interfaces';

import {
  AdminInterfacesActionTypes,
  createLoadingSelector,
  handleGetAdminInterface,
  handleSetAdminInterfaceId,
  openModal,
  selectAdminInterface,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminInterfacesActionTypes.GET_ADMIN_INTERFACE,
  AdminInterfacesActionTypes.FILTER_ADMIN_INTERFACE,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  adminInterfaceItems: selectAdminInterface(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
    getAdminInterface: handleGetAdminInterface,
    setAdminInterfaceId: handleSetAdminInterfaceId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interfaces);
