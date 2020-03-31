import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InterfaceForm from './InterfaceForm';

import {
  activeItemIdSelector,
  handleAddInterface,
  handleDeleteInterface,
  handleGetDictionaryInterfaceTypes,
  handleUpdateInterface,
  interfaceTypesOptionsSelector,
  isLoadingInterfacesTypesSelector,
  IStoreState,
  isUpdatingInterfaceSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isUpdatingInterfaceSelector(state),
  isLoadingTypesSelector: isLoadingInterfacesTypesSelector(state),
  interfaceTypesOptions: interfaceTypesOptionsSelector(state),
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
