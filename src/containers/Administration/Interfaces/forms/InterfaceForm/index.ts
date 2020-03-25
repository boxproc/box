import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InterfaceForm from './InterfaceForm';

import {
  AdminInterfacesActionTypes,
  createLoadingSelector,
  DictionaryActionTypes,
  handleAddAdminInterface,
  handleDeleteAdminInterface,
  handleGetDictionaryInterfaceTypes,
  handleUpdateInterface,
  selectActiveItemId,
  selectInterfaceTypesOptions,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminInterfacesActionTypes.UPDATE_ADMIN_INTERFACE,
]);

const loadingTypesSelector = createLoadingSelector([
  DictionaryActionTypes.GET_DICTIONARY_INTERFACE_TYPES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isLoadingTypesSelector: loadingTypesSelector(state),
  interfaceTypesOptions: selectInterfaceTypesOptions(state),
  currentInterfaceId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteInterface: handleDeleteAdminInterface,
    updateInterface: handleUpdateInterface,
    addInterface: handleAddAdminInterface,
    getDictionaryInterfaceTypes: handleGetDictionaryInterfaceTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterfaceForm);
