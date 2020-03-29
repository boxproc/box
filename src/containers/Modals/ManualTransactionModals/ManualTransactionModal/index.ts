import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ManualTransactionModal';

import {
  createLoadingSelector,
  currencyNumsOptionsSelector,
  handleGetDictionaryCurrencies,
  handleMakeLedgerLimitAdjustment,
  handleMakeLedgerTransaction,
  isCurrenciesLoadingSelector,
  LedgerLimitAdjustmentActionTypes,
  LedgerManualTransactionActionTypes,
  manualTrModalIsLimitAdjSelector,
  payloadManualTrModalSelector,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerManualTransactionActionTypes.MAKE_LEDGER_TRANSACTION,
  LedgerLimitAdjustmentActionTypes.LEDGER_LIMIT_ADJUSTMENT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isCurrenciesLoading: isCurrenciesLoadingSelector(state),
  modalPayload: payloadManualTrModalSelector(state),
  currenciesOptions: currencyNumsOptionsSelector(state),
  isLimitAdjustment: manualTrModalIsLimitAdjSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    makeTransaction: handleMakeLedgerTransaction,
    makeLimitAdjustment: handleMakeLedgerLimitAdjustment,
    getCurrencies: handleGetDictionaryCurrencies,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
