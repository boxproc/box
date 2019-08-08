import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TransactionModal from './TransactionModal';

import {
  closeModal,
  selectLedgerCurrentTransactionBalance,
  selectLedgerCurrentTransactionCard,
  selectLedgerCurrentTransactionGeneral,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  ledgerCurrentTransactionGeneral: selectLedgerCurrentTransactionGeneral(state),
  ledgerCurrentTransactionCard: selectLedgerCurrentTransactionCard(state),
  ledgerCurrentTransactionBalance: selectLedgerCurrentTransactionBalance(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionModal);
