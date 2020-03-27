import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InterfaceForm from './InterfaceForm';

import {
  activeItemIdSelector,
  handleAddInterface,
  handleDeleteInterface,
  handleGetDictionaryInterfaceTypes,
  handleUpdateInterface,
  isLoadingInterfacesTypesSelector,
  isUpdatingInterfaceSelector,
  selectInterfaceTypesOptions,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isUpdatingInterfaceSelector(state),
  isLoadingTypesSelector: isLoadingInterfacesTypesSelector(state),
  interfaceTypesOptions: selectInterfaceTypesOptions(state),
  currentInterfaceId: activeItemIdSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteInterface: handleDeleteInterface,
    updateInterface: handleUpdateInterface,
    addInterface: handleAddInterface,
    getDictionaryInterfaceTypes: handleGetDictionaryInterfaceTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterfaceForm);
