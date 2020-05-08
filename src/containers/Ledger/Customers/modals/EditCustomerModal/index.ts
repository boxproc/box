import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditCustomerModal from './EditCustomerModal';

import {
  currentCustomerInstIdSelector,
  currentCustomerNameSelector,
  handleGetServicesInterfaces,
  isServiceInterfacesLoadingSelector,
  IStoreState,
  servicesInterfacesOptionsSelector,
} from 'store';

const dirty = isDirty(formNamesConst.CUSTOMER);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
  isInterfacesLoading: isServiceInterfacesLoadingSelector(state),
  currentCustomerName: currentCustomerNameSelector(state),
  currentCustomerInstitutionId: currentCustomerInstIdSelector(state),
  interfacesOptions: servicesInterfacesOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInterfaces: handleGetServicesInterfaces,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCustomerModal);
