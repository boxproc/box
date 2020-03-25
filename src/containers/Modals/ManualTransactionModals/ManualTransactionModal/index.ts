import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ManualTransactionModal';

import {
  createLoadingSelector,
  handleMakeLedgerLimitAdjustment,
  handleMakeLedgerTransaction,
  LedgerLimitAdjustmentActionTypes,
  LedgerManualTransactionActionTypes,
  selectCurrencyNumsOptions,
  selectManualTransactionModalIsLimit,
  selectPayloadManualTransactionModal,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerManualTransactionActionTypes.MAKE_LEDGER_TRANSACTION,
  LedgerLimitAdjustmentActionTypes.LEDGER_LIMIT_ADJUSTMENT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  modalPayload: selectPayloadManualTransactionModal(state),
  currenciesOptions: selectCurrencyNumsOptions(state),
  isLimitAdjustment: selectManualTransactionModalIsLimit(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    makeTransaction: handleMakeLedgerTransaction,
    makeLimitAdjustment: handleMakeLedgerLimitAdjustment,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
