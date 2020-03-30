import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditCustomerModal from './EditCustomerModal';

import {
  createLoadingSelector,
  currentCustomerInstIdSelector,
  currentCustomerNameSelector,
  handleGetInterfacesService,
  ProductServicesActionTypes,
  selectProductCardInterfacesService,
  StoreState,
} from 'store';

const dirty = isDirty(formNamesConst.CUSTOMER);

const loadingSelectorInterfaces = createLoadingSelector([
  ProductServicesActionTypes.GET_SERVICE_INTERFACES,
]);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  isInterfacesLoading: loadingSelectorInterfaces(state),
  currentCustomerName: currentCustomerNameSelector(state),
  currentCustomerInstitutionId: currentCustomerInstIdSelector(state),
  interfacesOptions: selectProductCardInterfacesService(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInterfaces: handleGetInterfacesService,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCustomerModal);
