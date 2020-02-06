import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ManualTransactionModal';

import {
  createLoadingSelector,
  handleMakeLedgerLimitAdjustment,
  handleMakeLedgerTransaction,
  LedgerLimitAdjustmentActionTypes,
  LedgerManualTransactionActionTypes,
  selectCurrencyCodesOptions,
  selectManualTransactionModalIsLimit,
  selectPayloadManualTransactionModal,
  selectUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerManualTransactionActionTypes.MAKE_LEDGER_TRANSACTION,
  LedgerLimitAdjustmentActionTypes.LEDGER_LIMIT_ADJUSTMENT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  modalPayload: selectPayloadManualTransactionModal(state),
  currenciesOptions: selectCurrencyCodesOptions(state),
  isLimitAdjustment: selectManualTransactionModalIsLimit(state),
  uiItems: selectUiItems(state),
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
