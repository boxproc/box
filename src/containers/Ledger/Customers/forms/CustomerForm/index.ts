import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import CustomerForm from './CustomerForm';

import {
  activeItemIdSelector,
  countriesOptionsSelector,
  currentCustomerNameSelector,
  currentCustomerSelector,
  handleAddCustomer,
  handleDeleteCustomer,
  handleGetDictionaryCountries,
  handleUpdateCustomer,
  isAddingCustomerSelector,
  isDeletingCustomerSelector,
  isUpdatingCustomerSelector,
  StoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.CUSTOMER);

const mapStateToProps = (state: StoreState) => ({
  isLoading: isAddingCustomerSelector(state)
    || isUpdatingCustomerSelector(state)
    || isDeletingCustomerSelector(state),
  initialValues: currentCustomerSelector(state),
  currentCustomerName: currentCustomerNameSelector(state),
  countryCodes: countriesOptionsSelector(state),
  currentId: activeItemIdSelector(state),
  identificationTypeValue: formSelector(state, 'identificationType'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addCustomer: handleAddCustomer,
    deleteCustomer: handleDeleteCustomer,
    updateCustomer: handleUpdateCustomer,
    loadCountryCodes: handleGetDictionaryCountries,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerForm);
