import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InterfaceForm from './InterfaceForm';

import { StoreState } from 'store/StoreState';

import {
  AdminInterfacesActionTypes,
  createLoadingSelector,
  handleAddAdminInterface,
  handleDeleteAdminInterface,
  handleUpdateInterface,
  selectAdminCurrentInterfaceId,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  AdminInterfacesActionTypes.UPDATE_ADMIN_INTERFACE,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentInterfaceId: selectAdminCurrentInterfaceId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteInterface: handleDeleteAdminInterface,
    updateAdminInterface: handleUpdateInterface,
    addAdminInterface: handleAddAdminInterface,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterfaceForm);
