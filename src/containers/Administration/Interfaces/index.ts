import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Interfaces from './Interfaces';

import {
  AdminInterfacesActionTypes,
  createLoadingSelector,
  handleDeleteAdminInterface,
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
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interfaces);
