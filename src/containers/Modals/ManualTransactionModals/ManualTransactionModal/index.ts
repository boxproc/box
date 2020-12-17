import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import ManualTransactionModal from './ManualTransactionModal';

import { formNamesConst } from 'consts';

import {
  currencyNumsOptionsSelector,
  directDebitsMandatesOptionsSelector,
  handleGetDictionaryCurrencies,
  handleGetDirectDebitMandates,
  handleMakeTransaction,
  isCurrenciesLoadingSelector,
  isGettingDirectDebitMandatesSelector,
  isManualTransactionLoading,
  IStoreState,
  payloadManualTrModalSelector,
  resetDirectDebitMandates,
} from 'store';

const formSelector = formValueSelector(formNamesConst.MANUAL_TRANSACTION);

const mapStateToProps = (state: IStoreState) => ({
  currenciesOptions: currencyNumsOptionsSelector(state),
  isCurrenciesLoading: isCurrenciesLoadingSelector(state),
  isDirectDebitMandatesLoading: isGettingDirectDebitMandatesSelector(state),
  isLoading: isManualTransactionLoading(state),
  mandateOptions: directDebitsMandatesOptionsSelector(state),
  modalPayload: payloadManualTrModalSelector(state),
  accountIdValue: formSelector(state, 'accountId'),
  trTypeValue: formSelector(state, 'transactionType'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    makeTransaction: handleMakeTransaction,
    getCurrencies: handleGetDictionaryCurrencies,
    getDirectDebitMandates: handleGetDirectDebitMandates,
    resetDirectDebitMandates,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
