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
  handleMakeLimitAdjustment,
  handleMakeTransaction,
  isCurrenciesLoadingSelector,
  isGettingDirectDebitMandatesSelector,
  isLimitAdjustmentLoadingSelector,
  isManualTransactionLoading,
  IStoreState,
  manualTrModalIsLimitAdjSelector,
  payloadManualTrModalSelector,
  resetDirectDebitMandates,
} from 'store';

const formSelector = formValueSelector(formNamesConst.MANUAL_TRANSACTION);

const mapStateToProps = (state: IStoreState) => ({
  currenciesOptions: currencyNumsOptionsSelector(state),
  isCurrenciesLoading: isCurrenciesLoadingSelector(state),
  isDirectDebitMandatesLoading: isGettingDirectDebitMandatesSelector(state),
  isLimitAdjustment: manualTrModalIsLimitAdjSelector(state),
  isLoading: isLimitAdjustmentLoadingSelector(state) || isManualTransactionLoading(state),
  mandateOptions: directDebitsMandatesOptionsSelector(state),
  modalPayload: payloadManualTrModalSelector(state),
  accountIdValue: formSelector(state, 'accountId'),
  trTypeValue: formSelector(state, 'transactionType'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    makeTransaction: handleMakeTransaction,
    makeLimitAdjustment: handleMakeLimitAdjustment,
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
