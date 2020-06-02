import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import CustomerForm from './CustomerForm';

import {
  countriesOptionsSelector,
  currentCustomerSelector,
  handleAddCustomer,
  handleGetDictionaryCountries,
  handleUpdateCustomer,
  isAddingCustomerSelector,
  IStoreState,
  isUpdatingCustomerSelector,
} from 'store';

const formSelector = formValueSelector(formNamesConst.CUSTOMER);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingCustomerSelector(state)
    || isUpdatingCustomerSelector(state),
  initialValues: currentCustomerSelector(state),
  countryCodes: countriesOptionsSelector(state),
  identificationTypeValue: formSelector(state, 'identificationType'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addCustomer: handleAddCustomer,
    updateCustomer: handleUpdateCustomer,
    loadCountryCodes: handleGetDictionaryCountries,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerForm);
