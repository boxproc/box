import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditCustomerModal from './EditCustomerModal';

import {
  createLoadingSelector,
  handleGetInterfacesService,
  ProductServicesActionTypes,
  selectLedgerCurrentCustomerInstitutionId,
  selectLedgerCurrentCustomerName,
  selectProductCardInterfacesService,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.CUSTOMER);

const loadingSelectorInterfaces = createLoadingSelector([
  ProductServicesActionTypes.GET_SERVICE_INTERFACES,
]);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  isInterfacesLoading: loadingSelectorInterfaces(state),
  currentCustomerName: selectLedgerCurrentCustomerName(state),
  currentCustomerInstitutionId: selectLedgerCurrentCustomerInstitutionId(state),
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
