import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ManualTransactionModal';

import {
  createLoadingSelector,
  handleGetDictionaryCurrencies,
  handleMakeLedgerLimitAdjustment,
  handleMakeLedgerTransaction,
  LedgerLimitAdjustmentActionTypes,
  LedgerManualTransactionActionTypes,
  manualTrModalIsLimitAdjSelector,
  payloadManualTrModalSelector,
  selectCurrencyNumsOptions,
  selectIsCurrenciesLoading,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerManualTransactionActionTypes.MAKE_LEDGER_TRANSACTION,
  LedgerLimitAdjustmentActionTypes.LEDGER_LIMIT_ADJUSTMENT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isCurrenciesLoading: selectIsCurrenciesLoading(state),
  modalPayload: payloadManualTrModalSelector(state),
  currenciesOptions: selectCurrencyNumsOptions(state),
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
