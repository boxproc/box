import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ManualTransactionModal';

import {
  createLoadingSelector,
  handleMakeLedgerLimitAdjustment,
  handleMakeLedgerTransaction,
  LedgerLimitAdjustmentActionTypes,
  LedgerManualTransactionActionTypes,
  selectCurrencyNumCodesOptions,
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
  currenciesOptions: selectCurrencyNumCodesOptions(state),
  isLimitAdjustment: selectManualTransactionModalIsLimit(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    makeLedgerTransaction: handleMakeLedgerTransaction,
    makeLedgerLimitAdjustment: handleMakeLedgerLimitAdjustment,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
