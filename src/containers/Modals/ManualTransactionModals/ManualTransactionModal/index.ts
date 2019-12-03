import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ManualTransactionModal';

import {
  createLoadingSelector,
  handleMakeLedgerTransaction,
  LedgerManualTransactionActionTypes,
  selectCurrencyCodesOptions,
  selectPayloadLedgerManualTransactionModal,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerManualTransactionActionTypes.MAKE_LEDGER_TRANSACTION,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  modalPayload: selectPayloadLedgerManualTransactionModal(state),
  currenciesOptions: selectCurrencyCodesOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    makeLedgerTransaction: handleMakeLedgerTransaction,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
