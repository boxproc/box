import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import CustomerForm from './CustomerForm';

import { StoreState } from 'store/StoreState';

import {
  createLoadingSelector,
  handleAddLedgerCustomer,
  handleDeleteLedgerCustomer,
  handleGetDictionaryCountries,
  handleUpdateLedgerCustomer,
  LedgerCustomersActionTypes,
  selectCountryCodesOptions,
  selectLedgerCurrentCustomer,
  selectLedgerCurrentCustomerName,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.DELETE_LEDGER_CUSTOMER,
  LedgerCustomersActionTypes.UPDATE_LEDGER_CUSTOMER,
  LedgerCustomersActionTypes.ADD_LEDGER_CUSTOMER,
]);

const formSelector = formValueSelector(formNamesConst.CUSTOMER);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectLedgerCurrentCustomer(state),
  ledgerCurrentCustomerName: selectLedgerCurrentCustomerName(state),
  countryCodes: selectCountryCodesOptions(state),
  identificationTypeValue: formSelector(state, 'identificationType'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addLedgerCustomer: handleAddLedgerCustomer,
    deleteLedgerCustomer: handleDeleteLedgerCustomer,
    updateLedgerCustomer: handleUpdateLedgerCustomer,
    loadCountryCodes: handleGetDictionaryCountries,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerForm);
